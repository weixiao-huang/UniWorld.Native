import React, { Component } from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import moment from 'moment'
import Avatar from '@/components/Avatar'
import {
  MainView,
  WrapView,
  NoticeText,
  TriangleView,
  ContentView,
  TitleView,
  TitleText,
  ContentImage,
  ContentTouch,
  ContentText,
  ContentTextView,
  ImageModal,
  ImageTouch,
  ModalImage,
} from './style'

const AvatarSize = 42

export default class ChatItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }
  render() {
    const {
      index, sender, content, type, image,
      showTime, mine, sending, time,
    } = this.props
    return (
      <MainView>
        {showTime && <NoticeText>
          {moment(time).format('MM-DD H:mm')}
        </NoticeText>}
        {type === 2 ?
          <NoticeText>{content}</NoticeText> :
          <WrapView reverse={mine} >
            <Avatar
              id={sender.id}
              avatar={sender.avatar}
              size={AvatarSize}
            />
            <TriangleView reverse={mine} />
            <ContentTouch
              onLongPress={() => console.log('long press')}
              reverse={mine}
              activeOpacity={1}
            >
              {!mine && <TitleView>
                <TitleText>{sender.name}</TitleText>
              </TitleView>}
              <ContentView reverse={mine} >
                {mine && sending && <ActivityIndicator
                  style={{ marginRight: 10 }}
                  animating={mine && sending}
                />}
                {type ?
                  <ContentTextView reverse={mine}>
                    <TouchableOpacity
                      onPress={() => this.setState({ showModal: true })}
                    >
                      <ContentImage source={{ uri: image }} />
                    </TouchableOpacity>
                    {this.state.showModal && <ImageModal
                      onRequestClose={() => { }}
                      visible={this.state.showModal}
                      animationType="fade"
                    >
                      <ImageTouch
                        onPress={() => this.setState({ showModal: false })}
                      >
                        <ModalImage
                          source={{ uri: image }}
                        />
                      </ImageTouch>
                    </ImageModal>}
                  </ContentTextView> :
                  <ContentTextView reverse={mine}>
                    <ContentText>{content}</ContentText>
                  </ContentTextView>
                }
              </ContentView>
            </ContentTouch>
          </WrapView>
        }
      </MainView>
    )
  }
}
