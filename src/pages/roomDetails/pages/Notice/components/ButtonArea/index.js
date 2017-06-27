import React from 'react'
import { StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'

import {
  MainView,
  LeaveButton,
  JoinButton,
} from './style'

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
