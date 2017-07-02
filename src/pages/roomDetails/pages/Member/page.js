import React, { Component } from 'react'
import I18n from '@/locales'
import { Alert } from 'react-native'
import {
  MainScrollView,
  MainText,
  LeaveButton,
} from './style'

import AvatarBox from './components/AvatarBox'
import {
  LEAVE_ROOM,
} from './types'

export default class Member extends Component {
  leave = () => {
    Alert.alert(
      I18n.t('Room.Footer.Leave.title'),
      I18n.t('Room.Footer.Leave.content'),
      [
        {
          text: I18n.t('Room.Footer.Leave.confirm'),
          onPress: () => {
            this.props.dispatch({ type: LEAVE_ROOM })
            this.props.goBack()
          }
        },
        { text: I18n.t('Room.Footer.Leave.cancel'), onPress: () => { } }
      ]
    )
  }
  render() {
    console.log(this.props)
    return (
      <MainScrollView>
        <AvatarBox participants={this.props.participants} />
        <LeaveButton
          title={I18n.t('Room.Footer.leave')}
          onPress={this.leave} />
      </MainScrollView>
    )
  }
}
