/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Image } from 'react-native'

import Search from './Search'
import Square from './Square'
import Recommend from './Recommend'

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
      <View style={[styles.flex1, {paddingTop: 20}]}>
        <ScrollTabView style={{flex: 2}}>
          <Square tabLabel="广场"/>
          <Recommend tabLabel="推荐"/>
          <Search tabLabel="搜索"/>
        </ScrollTabView>
      </View>
    );
  }
}

