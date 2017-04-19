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

const items = ['JoinIn', 'Star', 'Mine']

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
          {Object.keys(roomList).map((key, index) => {
            return (
              <TabContainer
                key={index}
                tabLabel={I18n.t(`RoomList.${items[index]}.label`)}
                roomList={roomList[key]}
                title={I18n.t(`RoomList.${items[index]}.title`)}
              />
            )
          })}
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
