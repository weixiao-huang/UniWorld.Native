import React, { Component } from 'react'
import I18n from '@/locales'
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
  render() {
    console.log(this.props)
    return (
      <MainScrollView>
        <AvatarBox participants={this.props.participants} />
        <LeaveButton
          title={I18n.t('Room.Footer.leave')}
          onPress={() => {
            this.props.dispatch({ type: LEAVE_ROOM })
            this.props.goBack()
          }}
          />
      </MainScrollView>
    )
  }
}
