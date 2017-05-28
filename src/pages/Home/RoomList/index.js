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

import { SetCommonData } from '../../../store/actions'

const items = ['Star', 'Mine', 'JoinIn']

const mapStateToProps = state => ({
  roomList: state.room.roomList,
  token: state.auth.token
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class RoomList extends Component {
  componentWillMount() {
    if (!this.props.token) this.props.dispatch(SetCommonData('showLoginDialog', true))
  }
  render() {
    const roomList = this.props.roomList
    return (
      <View style={[styles.flex1, localStyles.container]}>
        {roomList && <ScrollTabView
          style={{flex: 2}}
          tabBarBackgroundColor="#ec5367"
          tabBarTextStyle={localStyles.tabBarText}
          tabBarUnderlineStyle={localStyles.tabBarUnderline}
        >
          <TabContainer name="marked" tabLabel={I18n.t('RoomList.Star.label')} roomList={roomList.marked}/>
          <TabContainer name="joined" tabLabel={I18n.t('RoomList.JoinIn.label')} roomList={roomList.joined}/>
          <TabContainer name="hosted" tabLabel={I18n.t('RoomList.Mine.label')} roomList={roomList.hosted}/>
        </ScrollTabView>}
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  container: {
    paddingTop:20,
    backgroundColor: '#ec5367'
  },
   tabStyle: {
    flex:2,
  },
  tabBarUnderline: {
    backgroundColor: 'white',
    height:1.5,
  },
  tabBarText:{
    color: 'white'
  }
})
