/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'
import styles from '../../common/styles'

import Notice from './Notice'
import Chat from './Chat'
import Member from './Member'

const mapStateToProps = state => ({
  roomInfo: state.room.roomInfo,
  userId: state.user.userInfo.id
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class RoomInfo extends Component {
  @autobind
  _joined() {
    for (let participant of this.props.roomInfo.participants) {
      if (this.props.userId === participant.id) return true
    }
    return false
  }


  _leave() {

  }
  _room() {

  }

  _joinin() {

  }
  _mark() {

  }
  render() {
    const { params: { id } } = this.props.navigation.state
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <ScrollTabView
          style={{flex: 2, marginTop: 20}}
          // tabBarBackgroundColor="#ec5367"
          // tabBarTextStyle={localStyles.tabBarText}
          // tabBarUnderlineStyle={localStyles.tabBarUnderline}
        >
          <Notice tabLabel={I18n.t('Room.Notice.title')}/>
          <Chat tabLabel={I18n.t('Room.Chat.title')}/>
          <Member tabLabel={I18n.t('Room.Member.title')}/>
        </ScrollTabView>
      </View>
    )
  }
}


const localStyles = StyleSheet.create({

})
