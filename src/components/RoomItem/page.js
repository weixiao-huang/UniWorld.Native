import React from 'react'
import { TouchableOpacity } from 'react-native'
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
  id, src, title, place, dateTimeStart, dateTimeEnd, myFollows,
  maxParticipants, participantCount, participantIds, titleLabel, myFollowDict,
  myId, navigateToRoomInfoAction, navigateToRoomDetailsAction,
}) => {
  let showPeople = maxParticipants ?
    `${participantCount}/${maxParticipants}` :
    '不限'
  if (showPeople.length > 5) {
    showPeople = participantCount.concat('/..')
  }
  const showTime = transferTimeFormat([dateTimeStart, dateTimeEnd])
  const roomFollows = _.intersection(
    participantIds, myFollows,
  ).map(item => myFollowDict[item])

  const navigate = () => {
    if (myId && participantIds.indexOf(myId) >= 0) {
      navigateToRoomDetailsAction(id)
    } else {
      navigateToRoomInfoAction(id)
    }
  }

  return (
    <TouchableOpacity
      onPress={navigate}
    >
      <MainView>
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
        <RoomView>
          <RoomCoverView>
            <RoomCoverImage
              source={src ? { uri: src } : defaultCover}
            />
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
    </TouchableOpacity>
  )
}

export default RoomItem
