import React from 'react'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
import Button from '@/components/Button'

const MainView = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
`

const LeaveButton = styled(Button) `
  flex: 1;
  background-color: #3555b6;
  border-radius: 0;
`
const JoinButton = styled(Button) `
  flex: 2;
  background-color: #ec5367;
  border-radius: 0;
`

const ButtonArea = ({ join, leave, joined, marked }) => (
  <MainView>
    <LeaveButton
      title={!joined ? (marked ? I18n.t('Room.Footer.unstar') : I18n.t('Room.Footer.star')) : I18n.t('Room.Footer.leave')}
      textStyle={{ fontSize: 15, color: 'white' }}
      onPress={leave}
    />
    <JoinButton
      title={!joined ? I18n.t('Room.Footer.join') : I18n.t('Room.Footer.room')}
      textStyle={{ fontSize: 15, color: 'white' }}
      onPress={join}
    />
  </MainView>
)

export default ButtonArea
