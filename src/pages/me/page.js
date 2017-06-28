import React, { Component, PropTypes } from 'react'
import { Alert } from 'react-native'
import I18n from '@/locales'

import {
  MainView,
  PlaceholderView,
  StyledScrollTabView,
} from './style'

import UserCover from './components/UserCover'
import UserInfo from './pages/UserInfo/'
import Follow from './pages/Follow/'
import Reputation from './pages/Reputation/'

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
              tabLabel={I18n.t('Me.info.label')}
              userInfo={userInfo}
            />
            <Follow
              tabLabel={I18n.t('Me.follow.label')}
              follows={userInfo.follows}
            />
            <Reputation
              tabLabel={I18n.t('Me.credit.label')}
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
