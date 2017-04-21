/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'

import styles from '../../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'

import TabContainer from './TabContainer'

const items = ['Star', 'Mine', 'JoinIn']

const mapStateToProps = state => ({
  roomList: state.room.roomList
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class RoomList extends Component {
  render() {
    console.log('渲染RoomList')
    const roomList = this.props.roomList
    console.log('RoomList页面', roomList)
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <ScrollTabView
          style={{flex: 2}}
          // tabBarBackgroundColor="#ec5367"
          // tabBarTextStyle={localStyles.tabBarText}
          // tabBarUnderlineStyle={localStyles.tabBarUnderline}
        >
          <TabContainer title={I18n.t('RoomList.Star.title')} tabLabel={I18n.t('RoomList.Star.label')} roomList={roomList.marked}/>
          <TabContainer title={I18n.t('RoomList.JoinIn.title')} tabLabel={I18n.t('RoomList.JoinIn.label')} roomList={roomList.joined}/>
          <TabContainer title={I18n.t('RoomList.Mine.title')} tabLabel={I18n.t('RoomList.Mine.label')} roomList={roomList.hosted}/>
        </ScrollTabView>
      </View>
    )
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
