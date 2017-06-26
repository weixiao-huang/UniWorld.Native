import React, { Component } from 'react'
import {  StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'

import {
  MainScrollTabView,
  MainView,
  MainText,
} from './style'

import Notice from './components/Notice'

const styles = StyleSheet.create({
  tabBarUnderline: {
    backgroundColor: 'white',
    height: 1.5,
  },
  tabBarText: {
    paddingTop:20,
    color: 'white',
  },
})

export default class RoomDetails extends Component {
  render() {
    console.log(this.props.roomDetails)
    const { roomDetails } = this.props
    let isHost = true
    console.log(this.props)
    // if (roomDetails && this.props.myId){
    //   isHost = roomDetails.host.id === this.props.myId
    // }
    return (
      <MainScrollTabView
        tabBarUnderlineStyle={styles.tabBarUnderline}
        tabBarBackgroundColor="#ec5367"
        tabBarTextStyle={styles.tabBarText}
      >
        {roomDetails ?
          <Notice
            tabLabel={I18n.t('Room.Notice.notice')}
            questionnaires={roomDetails.questionnaires}
            isHost={isHost}
          /> : null}
      </MainScrollTabView>
    )
  }
}
