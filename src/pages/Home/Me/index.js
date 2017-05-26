/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import styles from '../../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'

import UserCover from './UserCover'

import UserInfo from './UserInfo/index'
import Follow from './Follow/index'
import Reputation from './Reputation/index'

import { FetchUserInfo, SetCommonData } from '../../../store/actions'

@connect(state => ({token: state.auth.token}), dispatch => ({dispatch}))
export default class Me extends Component {
  componentWillMount() {
    if(this.props.token) this.props.dispatch(FetchUserInfo)
    else this.props.dispatch(SetCommonData('showLoginDialog', true))
  }

  render() {
    return (
      <View style={styles.flex1}>
        <UserCover/>
        <ScrollTabView
          style={{flex: 2}}
          tabBarUnderlineStyle={[meStyles.tabBarUnderline]}
          tabBarBackgroundColor="white"
          tabBarTextStyle={[meStyles.tabBarText]}
        >
          <UserInfo tabLabel={I18n.t('Me.info.label')}/>
          <Follow tabLabel={I18n.t('Me.follow.label')}/>
          <Reputation tabLabel={I18n.t('Me.credit.label')}/>
        </ScrollTabView>
      </View>
   );
  }
}

const meStyles = StyleSheet.create({
  tabBarUnderline: {
    backgroundColor: 'black',
    // backgroundColor: 'white',
    // height: 2,
    // borderTopColor: 'black',
    // borderTopWidth: 2
  },
  tabBarText: {
  }
})
