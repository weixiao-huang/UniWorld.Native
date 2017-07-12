import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'
import AnimatedScreen from '@/components/AnimatedScreen'

import {
  MainScrollTabView,
  MainView,
} from './style'

import Notice from './pages/Notice'
import Chat from './pages/Chat'
import Member from './pages/Member'
import GChat from './pages/GChat'

const styles = StyleSheet.create({
  tabBarUnderline: {
    backgroundColor: 'white',
    height: 1.5,
  },
  tabBarText: {
    color: 'white',
  },
})

export default class RoomDetails extends Component {
  render() {
    const { roomDetails, myId, hostId } = this.props
    return (
      <MainScrollTabView
        tabBarUnderlineStyle={styles.tabBarUnderline}
        tabBarBackgroundColor="#ec5367"
        tabBarTextStyle={styles.tabBarText}
        initialPage={1}
      >
        {roomDetails ? <Notice
          tabLabel={I18n.t('Room.Notice.notice')}
          questionnaires={roomDetails.questionnaires}
          isHost={myId === hostId}
        /> : <AnimatedScreen
          tabLabel={I18n.t('Room.Notice.notice')}
        />}
        {/*<GChat tabLabel="Gifted Chat" />*/}
        {roomDetails ? <Chat
          tabLabel={I18n.t('Room.Chat.title')}
          isHost={myId === hostId}
        /> : <AnimatedScreen
          tabLabel={I18n.t('Room.Chat.title')}
        />}
        {roomDetails ? <Member
          tabLabel={I18n.t('Room.Member.title')}
          goBack={this.props.navigation.goBack}
        /> : <AnimatedScreen
          tabLabel={I18n.t('Room.Member.title')}
        />}
      </MainScrollTabView>
    )
  }
}
