import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'

import EmptyHeader from '@/components/EmptyHeader'

import {
  MainView,
  TabView,
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
        {!!roomList && <StyledScrollTabView
          tabBarBackgroundColor="#ec5367"
          tabBarTextStyle={styles.tabBarText}
          tabBarUnderlineStyle={styles.tabBarUnderline}
          initialPage={1}
        >
          <TabContainer
            name="marked"
            tabLabel="Star"
            roomList={roomList.marked}
          />
          <TabContainer
            name="joined"
            tabLabel="JoinIn"
            roomList={roomList.joined}
          />
          <TabContainer
            name="hosted"
            tabLabel="Mine"
            roomList={roomList.hosted}
          />
        </StyledScrollTabView>}
      </MainView>
    )
  }
}
