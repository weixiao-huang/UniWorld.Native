import React, { Component } from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import BackgroundImage from '@/components/BackgroundImage'

import maleIcon from '@/img/icon/male.png'
import femaleIcon from '@/img/icon/female.png'
import defaultUrl from '@/img/image/loading.png'
import I18n from 'react-native-i18n'
import infoImg from '@/img/infoImage.jpg'
import {
  MainView,
  CoverImage,
  ContentView,
  ContentLineView,
  GenderIconImage,
  UsernameText,
  SignatureText,
  FollowWrapText,
  CoverModal,
  CoverTouch,
  ModalImage,
} from './style'

export default class UserCover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      animating: false,
    }
  }

  render() {
    const userInfo = this.props.userInfo
    return (
      <BackgroundImage bgUrl={infoImg}>
        {userInfo && <MainView>
          <TouchableOpacity onPress={() => this.setState({ showModal: true })}>
            <CoverImage source={{ uri: userInfo.avatar_thumbnail }} />
          </TouchableOpacity>
          {this.state.showModal && <CoverModal
            onRequestClose={() => {}}
            visible={this.state.showModal}
            animationType="fade"
          >
            <CoverTouch onPress={() => this.setState({ showModal: false })}>
              <ModalImage
                source={{ uri: userInfo.avatar }}
              />
            </CoverTouch>
          </CoverModal>}
          <ContentView>
            <ContentLineView>
              <GenderIconImage source={userInfo.gender ? maleIcon : femaleIcon} />
              <UsernameText>{userInfo.name}</UsernameText>
            </ContentLineView>
            <SignatureText>{userInfo.signature}</SignatureText>
            <FollowWrapText>
              {userInfo.thumb_ups} {I18n.t('User.likes')}
              | {userInfo.follows.length} {I18n.t('User.follows')}
              | {userInfo.followers.length} {I18n.t('User.followers')}
            </FollowWrapText>
          </ContentView>
        </MainView>}
      </BackgroundImage>
    )
  }
}


