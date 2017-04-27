/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import Info from './Info/index'
import Detail from './Detail/index'
import styles from '../../common/styles'
import Loading from '../../components/Loading'

import {
  GoToRoomDetail, FetchRoomList, FetchQuestionnaires, MarkRoom, UnmarkRoom,
  JoinRoom, LeaveRoom, FetchRoomInfo
} from '../../store/actions'

const mapStateToProps = state => ({
  roomInfo: state.room.roomInfo,
  myId: state.user.userInfo.id
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class RoomInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMarked: false,
      isJoined: false,
      loading: false
    }
  }
  async componentWillMount() {
    this.setState({
      loading: true
    })
    await this.props.dispatch(FetchRoomInfo(this.props.navigation.state.params.id))
    this.setState({
      isMarked: this._isMarked(),
      isJoined: this._joined(),
      loading: false
    })
  }
  _joined = () => {
    for (let participant of this.props.roomInfo.participants) {
      if (this.props.myId === participant.id) return true
    }
    return false
  }

  _isMarked = () => {
    return this.props.roomInfo.marked_users.indexOf(this.props.myId) >= 0
  }

  leave = async () => {
    try {
      this.setState({isJoined: false})
      await this.props.dispatch(LeaveRoom(this.props.roomInfo.id))
      this.props.dispatch(FetchRoomList)
    } catch (err) {
      console.log('Leave 错误', err)
    }
  }
  room = async () => {
    await this.props.dispatch(FetchQuestionnaires(this.props.roomInfo.id))
    this.props.dispatch(GoToRoomDetail(this.props.roomInfo.id))
  }

  join = async () => {
    try {
      this.room()
      await this.props.dispatch(JoinRoom(this.props.roomInfo.id))
      await this.props.dispatch(FetchRoomInfo(this.props.roomInfo.id))
      await this.props.dispatch(FetchRoomList)
      this.setState({isJoined: true})
    } catch (err) {
      console.log('Join 错误', err)
    }
  }
  mark = async () => {
    try {
      this.setState({isMarked: true})
      await this.props.dispatch(MarkRoom(this.props.roomInfo.id))
      this.props.dispatch(FetchRoomList)
    } catch (err) {
      console.log('Mark错误', err)
    }
  }
  unmark = async () => {
    try {
      this.setState({isMarked: false})
      await this.props.dispatch(UnmarkRoom(this.props.roomInfo.id))
      this.props.dispatch(FetchRoomList)
    } catch (err) {
      console.log('unMark错误', err)
    }
  }
  render() {
    console.log('获取RoomInfo的Props', this.props.navigation.state.params.id)
    const isEmpty = Object.keys(this.props.roomInfo).length > 0
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <Loading visible={this.state.loading}/>
        <View style={[styles.flex1]}>
          {this.state.loading ? null :
            <Info roomInfo={this.props.roomInfo} tabLabel={I18n.t('Room.Info.title')}/>
          }
          <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
            <TouchableOpacity
              style={[styles.flexCenter, localStyles.star]}
              onPress={this.state.isJoined ? this.leave : this.state.isMarked ? this.unmark : this.mark}
            >
              <Text style={[localStyles.footer__text]}>
                {this.state.isJoined ? I18n.t('Room.Footer.leave') : this.state.isMarked ? I18n.t('Room.Footer.unstar') : I18n.t('Room.Footer.star')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.flexCenter, localStyles.join]}
              onPress={this.state.isJoined ? this.room : this.join}
            >
              <Text style={[localStyles.footer__text]}>
                {this.state.isJoined ? I18n.t('Room.Footer.room') : I18n.t('Room.Footer.join')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  star: {
    flex: 1,
    backgroundColor: '#3555b6'
  },
  join: {
    flex: 2,
    backgroundColor: '#ec5367'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footer__text: {
    padding: 16,
    color: 'white',
    fontSize: 17
  }
})
