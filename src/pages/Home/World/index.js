/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'

import Search from './Search/index'
import Square from './Square/index'
import Recommend from './Recommend/index'

import styles from '../../../common/styles'

@connect(...[, dispatch => ({dispatch})])
export default class World extends Component {
  render() {
    console.log('渲染World')
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <ScrollTabView
          style={{flex: 2}}
          // tabBarBackgroundColor="#ec5367"
          // tabBarTextStyle={localStyles.tabBarText}
          // tabBarUnderlineStyle={localStyles.tabBarUnderline}
        >
          <Square tabLabel={I18n.t('World.Square.label')}/>
          <Recommend tabLabel={I18n.t('World.Recommend.label')}/>
          <Search tabLabel={I18n.t('World.Search.label')}/>
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
