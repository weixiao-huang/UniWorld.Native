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
    const { alert } = this.props
    if (alert) {
      Alert.alert(
        I18n.t('Me.info.Logout.title'),
        I18n.t('Me.info.Logout.content'),
        [
          {
            text: I18n.t('confirm'),
            onPress: () => {
              this.props.resetToLoginAction()
            },
          },
          {
            text: I18n.t('cancel'),
            onPress: () => {
              this.props.goBackAction()
            },
          },
        ],
      )
    }
  }
  render() {
    return (
      <MainView>
        <UserCover userInfo={this.props.userInfo} />
        {this.props.userInfo ?
          <StyledScrollTabView>
            <UserInfo
              tabLabel={'Info'}
              userInfo={this.props.userInfo}
            />
            <Follow
              tabLabel={'Follow'}
              follows={this.props.userInfo.follows}
            />
            <Reputation
              tabLabel={'Reputation'}
              thumbUps={this.props.userInfo.p_thumb_ups}
              thumbDowns={this.props.userInfo.p_thumb_downs}
            />
          </StyledScrollTabView> :
          <PlaceholderView />
        }
      </MainView>
    )
  }
}
