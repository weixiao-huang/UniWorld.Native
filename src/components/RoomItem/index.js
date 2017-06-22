import React, { PropTypes } from 'react'
import participantIcon from '@/img/icon/participant.png'

import {
  MainView,
  RoomView,
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
} from './style'

const length = 18

const RoomItem = ({
  src, title, place, dateTimeStart, dateTimeEnd, myFollows,
  maxParticipants, participantCount, participantIds, titleLabel,
}) => {
  let showPeople = maxParticipants ?
    `${participantCount}/${maxParticipants}` :
    '不限'
  if (showPeople.length > 5) {
    showPeople = participantCount.concat('/..')
  }
  return (
    <MainView>
      <RoomView>
        <RoomCoverView>
          <RoomCoverImage source={{ uri: src }} />
        </RoomCoverView>
        <RoomContentView>
          <RoomContentTitleView>
            <RoomContentTitleText>{
              title.length > length ?
              title.slice(0, length).concat('...') :
              title
            }</RoomContentTitleText>
          </RoomContentTitleView>
          <RoomContentWrapView>
            <RoomContentPlaceText>
              {place}
            </RoomContentPlaceText>
            <RoomContentFooterView>
              <RoomContentTimeView>
                <RoomContentTimeText>
                  {dateTimeStart} - {dateTimeEnd}
                </RoomContentTimeText>
              </RoomContentTimeView>
              <RoomContentPeopleView
                grayBg={maxParticipants && participantCount > maxParticipants}
              >
                <RoomContentPeopleText>
                  <RoomContentPeopleImage
                    source={participantIcon}
                  />
                  <RoomContentPeopleIconText>
                    {showPeople}
                  </RoomContentPeopleIconText>
                </RoomContentPeopleText>
              </RoomContentPeopleView>
            </RoomContentFooterView>
          </RoomContentWrapView>
        </RoomContentView>
      </RoomView>
    </MainView>
  )
}

RoomItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  dateTimeStart: PropTypes.string.isRequired,
  dateTimeEnd: PropTypes.string.isRequired,
  myFollows: PropTypes.array.isRequired,
}

RoomItem.defaultProps = {
  max_participants: null,
  participant_count: 1,
}

export default RoomItem
