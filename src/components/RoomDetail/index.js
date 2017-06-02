/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import { FetchQuestionnaires, SetLoading } from '../../store/actions'

import Notice from './Notice/index'
import Chat from './Chat/index'
import Member from './Member/index'
import Loading from "../Loading"

const mapStateToProps = state => ({
  roomInfo: state.room.roomInfo,
  loading: state.common.loading,
  questionnaires: state.room.questionnaires && state.room.questionnaires.questionnaires,
  userId: state.user.userInfo.id
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class RoomDetails extends Component {
  constructor(props) {
    super(props)
    global.chatTime = new Date()
    console.log(global.chatTime)
  }
  async componentWillMount() {
    this.props.dispatch(SetLoading(true))
    await this.props.dispatch(FetchQuestionnaires(this.props.navigation.state.params.id))
    this.props.dispatch(SetLoading(false))
  }

  render() {
    const isEmpty = !this.props.questionnaires || this.props.questionnaires.length <= 0
    const isHost = this.props.roomInfo.host.id == this.props.userId
    return (
      <View style={[styles.flex1, localStyles.container]}>
        {this.props.loading ?
          <Loading visible={this.props.loading}/> :
          isEmpty ? null :
          <ScrollTabView
            initialPage={1}
            style={{flex: 2, marginTop: 20}}
            tabBarBackgroundColor="#ec5367"
            tabBarTextStyle={localStyles.tabBarText}
            tabBarUnderlineStyle={localStyles.tabBarUnderline}
          >
            <Notice questionnaires={this.props.questionnaires} tabLabel={I18n.t('Room.Notice.title')} isHost={isHost}/>
            <Chat tabLabel={I18n.t('Room.Chat.title')} isHost={isHost}/>
            <Member tabLabel={I18n.t('Room.Member.title')} isHost={isHost}/>
          </ScrollTabView>
        }
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  tabBarText:{
    color: 'white'
  },
  tabBarUnderline:{
  backgroundColor: 'white',
  height: 2
  }
})
