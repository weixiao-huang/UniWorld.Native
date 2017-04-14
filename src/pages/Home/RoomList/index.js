/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native'
import styles from '../../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'

import Star from './Star'
import Mine from './Mine'
import JoinIn from './JoinIn'

export default class RoomList extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: '列表',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../../assets/icon/myRoomR.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <ScrollTabView
          style={{flex: 2}}
          // tabBarBackgroundColor="#ec5367"
          // tabBarTextStyle={localStyles.tabBarText}
          // tabBarUnderlineStyle={localStyles.tabBarUnderline}
        >
          <Star tabLabel="收藏"/>
          <JoinIn tabLabel="加入"/>
          <Mine tabLabel="建立"/>
        </ScrollTabView>
      </View>
    );
  }
}


const localStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'white'
  },
  tabBarUnderline: {
    backgroundColor: 'white'
  },
  tabBarText:{
    color: 'white'
  }
})
