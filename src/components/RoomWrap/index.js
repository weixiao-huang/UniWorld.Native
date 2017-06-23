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


const RoomWrap = ({ roomList, title, titleLabel }) => {
  const gotoRoomInfo = id => () => {

  }
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
              onPress={gotoRoomInfo(item.id)}
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
}

RoomWrap.propTypes = {
  title: PropTypes.string,
  roomList: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location_string: PropTypes.string.isRequired,
      date_time_start: PropTypes.string.isRequired,
      date_time_end: PropTypes.string.isRequired,
      max_participants: PropTypes.number.isRequired,
      participant_count: PropTypes.number.isRequired,
      participant_ids: PropTypes.arrayOf(
        PropTypes.number.isRequired,
      ),
    }),
  ).isRequired,
}

RoomWrap.defaultProps = {
  title: '',
}

export default RoomWrap
