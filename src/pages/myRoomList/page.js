import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import I18n from '@/locales'

import EmptyHeader from '@/components/EmptyHeader'

import {
  MainView,
  StyledScrollTabView,
} from './style'

import TabContainer from './pages/TabContainer'

const styles = StyleSheet.create({
  tabBarUnderline: {
    backgroundColor: 'white',
    height: 1.5,
  },
  tabBarText: {
    color: 'white',
  },
})

export default class MyRoomList extends Component {
  render() {
    const roomList = this.props.roomList
    return (
      <MainView>
        <EmptyHeader />
        <StyledScrollTabView
          tabBarBackgroundColor="#ec5367"
          tabBarTextStyle={styles.tabBarText}
          tabBarUnderlineStyle={styles.tabBarUnderline}
          initialPage={1}
        >
          <TabContainer
            name="marked"
            tabLabel={I18n.t('RoomList.Star.label')}
            roomList={roomList && roomList.marked}
          />
          <TabContainer
            name="joined"
            tabLabel={I18n.t('RoomList.JoinIn.label')}
            roomList={roomList && roomList.joined}
          />
          <TabContainer
            name="hosted"
            tabLabel={I18n.t('RoomList.Mine.label')}
            roomList={roomList && roomList.hosted}
          />
        </StyledScrollTabView>
      </MainView>
    )
  }
}
