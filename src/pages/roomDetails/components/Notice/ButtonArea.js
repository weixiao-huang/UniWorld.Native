import React from 'react'
import { StyleSheet } from 'react-native'
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
  padding: 5px 0;
`
const JoinButton = styled(Button) `
  flex: 2;
  background-color: #ec5367;
  border-radius: 0;
`

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: 'white',
  },
})

const ButtonArea = ({ rightFunc, leftFunc }) => (
  <MainView>
    <LeaveButton
      title={I18n.t('Room.Notice.Footer.edit')}
      textStyle={styles.text}
      onPress={leftFunc}
    />
    <JoinButton
      title={I18n.t('Room.Notice.Footer.new')}
      textStyle={styles.text}
      onPress={rightFunc}
    />
  </MainView>
)

export default ButtonArea
