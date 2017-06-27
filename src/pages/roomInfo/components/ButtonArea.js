import React from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
import Button from '@/components/Button'

const MainView = styled.View`
  flex-direction: row;
  position: absolute;
  background-color: white;
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

const ButtonArea = ({
  room, mark, unmark, join, leave, joined, marked,
}) => (
  <MainView>
    <LeaveButton
      title={!joined ?
        (marked ?
          I18n.t('Room.Footer.unstar') :
          I18n.t('Room.Footer.star')
        ) :
        I18n.t('Room.Footer.leave')
      }
      textStyle={styles.text}
      onPress={!joined ? (marked ? unmark : mark) : leave}
    />
    <JoinButton
      title={!joined ?
        I18n.t('Room.Footer.join') :
        I18n.t('Room.Footer.room')
      }
      textStyle={styles.text}
      onPress={!joined ? join : room}
    />
  </MainView>
)

export default ButtonArea
