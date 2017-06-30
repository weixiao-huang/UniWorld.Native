import React, { PropTypes } from 'react'
import _ from 'lodash'
import participantIcon from '@/img/icon/participant.png'
import { transferTimeFormat } from '@/utils'
import I18n from '@/locales'

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
  FriendView,
  FriendText,
  FriendImage,
} from './style'

const length = 18
const defaultCover = require('@/img/image/default_avatar.jpg')

const RoomItem = ({
  src, title, place, dateTimeStart, dateTimeEnd, myFollows,
  maxParticipants, participantCount, participantIds, titleLabel, myFollowDict,
}) => {
  let showPeople = maxParticipants ?
    `${participantCount}/${maxParticipants}` :
    '不限'
  if (showPeople.length > 5) {
    showPeople = participantCount.concat('/..')
  }
  const showTime = transferTimeFormat([dateTimeStart, dateTimeEnd])
  const roomFollows = _.intersection(participantIds, myFollows).map(item => myFollowDict[item])
  return (
    <MainView>
      <FriendView>
        {roomFollows.length > 0 ? roomFollows.slice(0, 3).map(item => (
          <FriendImage key={item.id} source={{ uri: item.avatar }} />
        )) : null}
        {roomFollows.length > 0 ?
          <FriendText>
            {roomFollows.length > 2 ?
              roomFollows[0].name.slice(0, 5) :
              roomFollows[0].name} {roomFollows.length > 1 ? '...'
                : null}
            {I18n.t('Room.followText1')}
          </FriendText> : null}
      </FriendView>
      <RoomView>
        <RoomCoverView>
          {src ? <RoomCoverImage source={{ uri: src }} /> : <RoomCoverImage source={defaultCover} />}
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
                  {showTime}
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
  // myFollows: PropTypes.array.isRequired,
}

RoomItem.defaultProps = {
  max_participants: null,
  participant_count: 1,
}

export default RoomItem
