/*
  Page: RoomDetails
*/
import React from 'react'
import { StyleSheet, Keyboard, ActivityIndicator } from 'react-native'
import I18n from 'react-native-i18n'
import AnimatedScreen from '@/components/AnimatedScreen'

import {
  MainScrollTabView,
  MainView,
  SocketBreakView,
  SocketBreakText,
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

export default ({
  roomDetails, myId, hostId, socketConnectStatus, socketReconnect
}) => (
  <MainView>
    {!socketConnectStatus && <SocketBreakView>
      <ActivityIndicator animating color="#414755" />
      <SocketBreakText>
        {socketReconnect ?
          '网络断了哦，正在尝试连接中' :
          '失去连接，尝试重启应用'}
      </SocketBreakText>
    </SocketBreakView>}
    <MainScrollTabView
      tabBarUnderlineStyle={styles.tabBarUnderline}
      tabBarBackgroundColor="#ec5367"
      tabBarTextStyle={styles.tabBarText}
      initialPage={1}
      contentProps={{ keyboardShouldPersistTaps: 'handled' }}
      onChangeTab={() => Keyboard.dismiss()}
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
  </MainView>
)
