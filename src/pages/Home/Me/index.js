/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet, View, Text } from 'react-native'
import styles from '../../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'

import BackgroundImage from '../../../components/BackgroundImage'
import UserInfo from './UserInfo'
import UserCover from './UserCover'

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
        <ScrollTabView style={{flex: 2}}>
          <UserInfo tabLabel="信息"/>
          <UserInfo tabLabel="标签"/>
          <UserInfo tabLabel="信誉"/>
        </ScrollTabView>
      </View>
   );
  }
}

