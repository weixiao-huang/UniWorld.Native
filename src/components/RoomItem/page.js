import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Alert } from 'react-native'
import participantIcon from '@/img/icon/participant.png'
import { transferTimeFormat } from '@/utils'
import I18n from '@/locales'

import {
  MainView,
  HeaderView,
  RoomView,
  RowView,
  DeleteView,
  HiddenTouch,
  RoomCoverView,
  RoomCoverImage,
  RoomContentView,
  RoomContentTitleView,
  RoomContentTitleText,
  RoomContentWrapView,
  RoomContentPlaceText,
  RoomContentFooterView,
  RoomContentTimeView,
  RoomContentTimeText,
  RoomContentPeopleView,
  RoomContentPeopleText,
  RoomContentPeopleImage,
  RoomContentPeopleIconText,
  FriendView,
  FriendText,
  FriendImage,
  TitleLableView,
  TitleLabelText,
} from './style'

const length = 18
const defaultCover = require('@/img/image/default_avatar.jpg')

export default class RoomItem extends Component {
  constructor(props) {
    super(props)
    let show = true
    if (this.props.myBlocks.length != 0 && this.props.host) {
      for (let user in this.props.myBlocks) {
        if (user.id === this.props.host) {
          show = false
        }
      }
    }
    this.state = {
      show,
    }
  }
  hideRoom = () => {
    Alert.alert(
      '',
      I18n.t('Alert.Hide.text'),
      [
        {
          text: 'Yes',
          onPress: () => {
            this.setState({
              show: false,
            })
          },
        },
        {
          text: 'No',
          onPress: () => {

          },
        },
      ],
    )
  }
  render = () => {
    const {
  id, src, title, place, dateTimeStart, dateTimeEnd, myFollows, myBlocks,
      maxParticipants, participantCount, participantIds, titleLabel,
      myId, navigateToRoomInfoAction, navigateToRoomDetailsAction,
      infoFlag, unreadMessages, myFollowDict, host,
} = this.props
    console.log(title, this.state.show)
    let showPeople = maxParticipants ?
      `${participantCount}/${maxParticipants}` :
      '不限'
    if (showPeople.length > 5) showPeople = `${participantCount}/..`
    const showTime = transferTimeFormat([dateTimeStart, dateTimeEnd])
    const roomFollows = _.intersection(
      participantIds, myFollows,
    ).map(item => myFollowDict[item])
    const inFlag = myId && participantIds && participantIds.indexOf(myId) >= 0
    const navigate = () => (
      inFlag && !infoFlag ?
        navigateToRoomDetailsAction(id) :
        navigateToRoomInfoAction(id)
    )
    return (
      <View>
        {this.state.show && <TouchableOpacity
          onPress={navigate}
        >
          <HeaderView>
            <FriendView>
              {roomFollows.length > 0 ? roomFollows.slice(0, 3).map(item => (
                <FriendImage key={item.id} source={{ uri: item.avatar }} />
              )) : null}
              {roomFollows.length > 0 && <FriendText>
                {roomFollows.length > 2 ?
                  roomFollows[0].name.slice(0, 5) :
                  roomFollows[0].name} {roomFollows.length > 1 && '...'}
                {I18n.t('Room.followText1')}
              </FriendText>}
            </FriendView>

          </HeaderView>
          <RoomView>
            <RoomCoverView>
              <RoomCoverImage
                source={src ? { uri: src } : defaultCover}
              />
            </RoomCoverView>
            <RoomContentView>
              <RoomContentTitleView>
                <RowView>
                  {unreadMessages ? <TitleLableView>
                    <TitleLabelText>{unreadMessages > 99 ? '99+' : unreadMessages}</TitleLabelText>
                  </TitleLableView>
                    : null}
                  <RoomContentTitleText>{
                    title.length > length ?
                      title.slice(0, length).concat('...') :
                      title
                  }
                  </RoomContentTitleText>
                </RowView>
                <HiddenTouch
                  onPress={this.hideRoom}
                >
                  <Icon
                    name="close"
                    size={18}
                    style={{ paddingTop: 3 }}
                    color="#ccc"
                  />
                </HiddenTouch>
              </RoomContentTitleView>
              <RoomContentWrapView>
                <RoomContentPlaceText>
                  {place}
                </RoomContentPlaceText>
                <RoomContentFooterView>
                  <RoomContentTimeView>
                    <RoomContentTimeText>
                      {showTime}
                    </RoomContentTimeText>
                  </RoomContentTimeView>
                  <RoomContentPeopleView
                    grayBg={maxParticipants && participantCount > maxParticipants}
                  >
                    <RoomContentPeopleImage
                      source={participantIcon}
                    />
                    <RoomContentPeopleText>
                      <RoomContentPeopleIconText>
                        {` ${showPeople}`}
                      </RoomContentPeopleIconText>
                    </RoomContentPeopleText>
                  </RoomContentPeopleView>
                </RoomContentFooterView>
              </RoomContentWrapView>
            </RoomContentView>
          </RoomView>
        </TouchableOpacity>}
      </View>
    )
  }
}

