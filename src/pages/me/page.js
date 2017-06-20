import React, { Component, PropTypes } from 'react'
import ScrollTabView from 'react-native-scrollable-tab-view'

import {
  MainView,
} from './style'

import UserCover from './components/UserCover'
import UserInfo from './components/UserInfo/'
import Follow from './components/Follow/'
import Reputation from './components/Reputation/'

import { userInfo } from './mocks'

export default class Me extends Component {
  render() {
    return (
      <MainView>
        <UserCover userInfo={userInfo} />
        <ScrollTabView
          style={{ flex: 2 }}
        >
          <UserInfo tabLabel={'Info'} />
          <Follow tabLabel={'Follow'} />
          <Reputation tabLabel={'Reputation'} />
        </ScrollTabView>
      </MainView>
    )
  }
}
