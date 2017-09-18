/*
  Page: RoomDetails
*/
import React, { Component } from 'react'
import { StyleSheet, Keyboard, StatusBar } from 'react-native'
import I18n from 'react-native-i18n'
import AnimatedScreen from '@/components/AnimatedScreen'

import {
  MainScrollTabView,
  MainView,
} from './style'

import Notice from './pages/Notice'
import Chat from './pages/Chat'
import Member from './pages/Member'

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
    const { roomDetails, myId, hostId, navigation } = this.props
    return (
      <MainView>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <MainScrollTabView
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarBackgroundColor="#ec5367"
          tabBarTextStyle={styles.tabBarText}
          initialPage={1}
          contentProps={{ keyboardShouldPersistTaps: 'handled' }}
          onChangeTab={() => Keyboard.dismiss()}
          innerRef={(tabView) => {
            this.tabView = tabView
            console.log(tabView)
          }
          }
        >
          {roomDetails ? <Notice
            tabLabel={I18n.t('Room.Notice.notice')}
            questionnaires={roomDetails.questionnaires}
            isHost={myId === hostId}
          /> : <AnimatedScreen
              tabLabel={I18n.t('Room.Notice.notice')}
            />}
          {roomDetails ? <Chat
            tabLabel={I18n.t('Room.Chat.title')}
            isHost={myId === hostId}
            toNotice={() => { this.tabView.goToPage(0) }}
          /> : <AnimatedScreen
              tabLabel={I18n.t('Room.Chat.title')}
            />}
          {roomDetails ? <Member
            tabLabel={I18n.t('Room.Member.title')}
            goBack={navigation.goBack}
          /> : <AnimatedScreen
              tabLabel={I18n.t('Room.Member.title')}
            />}
        </MainScrollTabView>
      </MainView>
    )
  }
}

