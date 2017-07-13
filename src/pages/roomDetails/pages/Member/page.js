import React, { Component } from 'react'
import I18n from '@/locales'
import { Alert } from 'react-native'
import {
  MainScrollView,
  LeaveButton,
} from './style'

import AvatarBox from './components/AvatarBox'

export default class Member extends Component {
  leave = () => {
    Alert.alert(
      I18n.t('Room.Footer.Leave.title'),
      I18n.t('Room.Footer.Leave.content'),
      [
        {
          text: I18n.t('Room.Footer.Leave.confirm'),
          onPress: () => {
            const {
              goBack, leaveRoomAction, fetchWorldAction,
            } = this.props
            leaveRoomAction()
            goBack()
            fetchWorldAction()
          },
        },
        {
          text: I18n.t('Room.Footer.Leave.cancel'),
          onPress: () => { },
        },
      ],
    )
  }
  render() {
    return (
      <MainScrollView>
        <AvatarBox participants={this.props.participants} />
        <LeaveButton
          title={I18n.t('Room.Footer.leave')}
          onPress={this.leave}
        />
      </MainScrollView>
    )
  }
}
