import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import starIcon from '@/img/icon/starIcon.png'

import RoomItem from '../RoomItem'

import {
  MainView,
  MainTitleView,
  MainTitleImage,
  MainTitleText,
  MainWrapView,
  RoomListView,
} from './style'

export default class RoomWrap extends Component {
  navigate = item => () => {
    const {
      myId, navigateToRoomInfoAction, navigateToRoomDetailsAction,
    } = this.props
    if (myId && item.participant_ids.indexOf(myId) >= 0) {
      navigateToRoomDetailsAction(item.id)
    } else {
      navigateToRoomInfoAction(item.id)
    }
  }
  render() {
    const { title, roomList } = this.props
    return (
      <MainView>
        {!!title && <MainTitleView>
          <MainTitleImage
            source={starIcon}
          />
          <MainTitleText>{title}</MainTitleText>
        </MainTitleView>}
        <MainWrapView>
          {roomList.map(item => (
            <RoomListView key={item.id}>
              <TouchableOpacity
                onPress={this.navigate(item)}
              >
                <RoomItem
                  src={item.cover}
                  title={item.title}
                  place={item.location_string}
                  dateTimeStart={item.date_time_start}
                  dateTimeEnd={item.date_time_end}
                  maxParticipants={item.max_participants}
                  participantCount={item.participant_count}
                  participantIds={item.participant_ids}
                  titleLabel={this.props.titleLabel}
                  myFollows={this.props.myFollows}
                  myFollowDict={this.props.myFollowDict}
                />
              </TouchableOpacity>
            </RoomListView>
          ))}
        </MainWrapView>
      </MainView>
    )
  }
}

