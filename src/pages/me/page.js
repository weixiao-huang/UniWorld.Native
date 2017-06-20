import React, { Component, PropTypes } from 'react'

import {
  MainView,
  MainText,
} from './style'

import UserCover from './components/UserCover'

import { userInfo } from './mocks'

export default class Me extends Component {
  render() {
    return (
      <MainView>
        <UserCover userInfo={userInfo} />
        <MainText>This is Me Page</MainText>
      </MainView>
    )
  }
}
