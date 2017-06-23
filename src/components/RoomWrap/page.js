import React, { PropTypes } from 'react'
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


const RoomWrap = ({
  roomList, title, titleLabel,
  navigateAction,
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
          <TouchableOpacity
            onPress={() => navigateAction(item.id)}
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
              titleLabel={titleLabel}
            />
          </TouchableOpacity>
        </RoomListView>
      ))}
    </MainWrapView>
  </MainView>
)

export default RoomWrap
