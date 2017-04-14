/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native'

import Search from './Search/index'
import Square from './Square/index'
import Recommend from './Recommend/index'

import styles from '../../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'

export default class World extends Component {
  static navigationOptions = {
    tabBar: {
      label: '世界',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Image
          source={require('../../../assets/icon/plazaR.png')}
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
          <Square tabLabel="广场"/>
          <Recommend tabLabel="推荐"/>
          <Search tabLabel="搜索"/>
        </ScrollTabView>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  tabBarUnderline: {
    backgroundColor: 'white'
  },
  tabBarText:{
    color: 'white'
  }
})
