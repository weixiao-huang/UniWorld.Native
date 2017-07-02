import React, { Component } from 'react'
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
  render() {
    const { title, roomList } = this.props
    console.log(this.props.unreadMessages)
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
              <RoomItem
                id={item.id}
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
                unreadMessages={this.props.unreadMessages[item.id]}
              />
            </RoomListView>
          ))}
        </MainWrapView>
      </MainView>
    )
  }
}

