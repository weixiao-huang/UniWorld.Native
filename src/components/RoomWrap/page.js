/*
  Components: RoomWrap
*/

import React from 'react'
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

export default ({
  title, roomList,
  titleLabel, myFollows, myFollowDict, unreadMessages, myBlocks,
}) => (
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
            titleLabel={titleLabel}
            myFollows={myFollows}
            myFollowDict={myFollowDict}
            unreadMessages={unreadMessages[item.id]}
            myBlocks={myBlocks}
            host={item.host}
          />
        </RoomListView>
      ))}
    </MainWrapView>
  </MainView>
)
