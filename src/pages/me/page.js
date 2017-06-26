import React, { Component, PropTypes } from 'react'
import { Alert } from 'react-native'
import I18n from '@/locales'

import {
  MainView,
  PlaceholderView,
  StyledScrollTabView,
} from './style'

import UserCover from './components/UserCover'
import UserInfo from './components/UserInfo/'
import Follow from './components/Follow/'
import Reputation from './components/Reputation/'

export default class Me extends Component {
  componentDidUpdate() {
    const {
      alert, resetToLoginAction, goBackAction,
    } = this.props
    if (alert) {
      Alert.alert(
        I18n.t('Alert.Login.title'),
        I18n.t('Alert.Login.content'),
        [
          {
            text: I18n.t('Alert.Login.confirm'),
            onPress: () => resetToLoginAction(),
          },
          {
            text: I18n.t('Alert.Login.cancel'),
            onPress: () => goBackAction(),
          },
        ],
      )
    }
  }
  render() {
    const { userInfo } = this.props
    return (
      <MainView>
        <UserCover userInfo={userInfo} />
        {userInfo ?
          <StyledScrollTabView>
            <UserInfo
              tabLabel={'Info'}
              userInfo={userInfo}
            />
            <Follow
              tabLabel={'Follow'}
              follows={userInfo.follows}
            />
            <Reputation
              tabLabel={'Reputation'}
              thumbUps={userInfo.p_thumb_ups}
              thumbDowns={userInfo.p_thumb_downs}
            />
          </StyledScrollTabView> :
          <PlaceholderView />
        }
      </MainView>
    )
  }
}
