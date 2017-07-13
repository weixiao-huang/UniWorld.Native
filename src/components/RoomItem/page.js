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
  TitleLableView,
  TitleLabelText,
} from './style'

const length = 18
const defaultCover = require('@/img/image/default_avatar.jpg')

const RoomItem = ({
  id, src, title, place, dateTimeStart, dateTimeEnd, myFollows,
  maxParticipants, participantCount, participantIds, titleLabel,
  myId, navigateToRoomInfoAction, navigateToRoomDetailsAction,
  infoFlag, unreadMessages, myFollowDict,
}) => {
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

              {unreadMessages ? <TitleLableView>
                <TitleLabelText>{unreadMessages > 99 ? '99+' : unreadMessages}</TitleLabelText>
              </TitleLableView>
                : null}
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
      </MainView>
    </TouchableOpacity>
  )
}

export default RoomItem
