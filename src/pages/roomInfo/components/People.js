import React from 'react'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
import Avatar from '@/components/Avatar'
import { Dimensions } from 'react-native'

const containerGap = 15
const gap = 7
const numPerRow = 5

const MainView = styled.View`
  background-color: white;
  padding: 15px;
`
const TitleView = styled.View`
  justifyContent: space-between;
  marginBottom: 5px;
  flex-direction: row;
`
const TitleText = styled.Text`
   color: #ff5757;
   fontSize: 16px;
`
const WrapView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`

const AvatarView = styled.View`
  margin: 7px;
`

const People = ({ participants, maxParticipants }) => (
  <MainView>
    <TitleView>
      <TitleText>
        {`${participants.length} `}
        {I18n.t('Room.Info.Participants.space1')}
        {maxParticipants ?
          `, ${maxParticipants - participants.length} ${I18n.t('Room.Info.Participants.space2')}` : ''}
      </TitleText>
      <TitleText>
        {maxParticipants ? `${participants.length} / ${maxParticipants}` : I18n.t('NewRoom.input.second.max.placeholder')}
      </TitleText>
    </TitleView>
    <WrapView>
      {participants.map(item => (
        <AvatarView key={item.id}>
          <Avatar
            id={item.id}
            size={(Dimensions.get('window').width - 2 * containerGap) / numPerRow - gap * 2}
            avatar={item.avatar}
          />
        </AvatarView>
      ))}
    </WrapView>
  </MainView>
)

export default People
