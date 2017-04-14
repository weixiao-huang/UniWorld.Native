/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native'
import styles from '../../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'

import UserCover from './UserCover'

import UserInfo from './UserInfo/index'
import Follow from './Follow/index'
import Reputation from './Reputation/index'

export default class NewRoom extends Component {
  static navigationOptions = {
    tabBar: {
      label: '我的',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../../assets/icon/myInfoR.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
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
          <UserInfo tabLabel="信息"/>
          <Follow tabLabel="关注"/>
          <Reputation tabLabel="信誉"/>
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
