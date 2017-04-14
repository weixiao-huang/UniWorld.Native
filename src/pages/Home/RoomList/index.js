/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'

import styles from '../../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'

import Star from './Star'
import Mine from './Mine'
import JoinIn from './JoinIn'

export default class RoomList extends React.Component {
  render() {
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <ScrollTabView
          style={{flex: 2}}
          // tabBarBackgroundColor="#ec5367"
          // tabBarTextStyle={localStyles.tabBarText}
          // tabBarUnderlineStyle={localStyles.tabBarUnderline}
        >
          <Star tabLabel={I18n.t('RoomList.Star.label')}/>
          <JoinIn tabLabel={I18n.t('RoomList.JoinIn.label')}/>
          <Mine tabLabel={I18n.t('RoomList.Mine.label')}/>
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
