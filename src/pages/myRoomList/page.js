import React, { Component } from 'react'
import { StyleSheet, Alert } from 'react-native'
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
  componentDidUpdate() {
    const {
      alert, resetToLoginAction, goBackAction,
    } = this.props
    if (alert) {
      Alert.alert(
        I18n.t('Alert.Login.title'),
        I18n.t('Alert.Login.content'),
        [
          {
            text: I18n.t('Alert.Login.confirm'),
            onPress: () => resetToLoginAction(),
          },
          {
            text: I18n.t('Alert.Login.cancel'),
            onPress: () => goBackAction(),
          },
        ],
      )
    }
  }
  render() {
    const { roomList, token } = this.props
    return (
      <MainView>
        <EmptyHeader />
        {token && <StyledScrollTabView
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
        </StyledScrollTabView>}
      </MainView>
    )
  }
}
