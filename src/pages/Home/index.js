/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, Alert } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import { MessagePolling } from '../../store/actions'

import World from './World'
import NewRoom from './NewRoom'
import Smile from './Smile'
import RoomList from './RoomList'
import Me from './Me'


const HomeRouter = TabNavigator({
  World: {
    screen: World,
    navigationOptions: {
      tabBar: {
        label: I18n.t('World.label', { defaultValue: 'World' }),
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        icon: ({tintColor}) => (
          <Image
            source={require('../../assets/icon/plazaR.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      }
    }
  },
  NewRoom: {
    screen: NewRoom,
    navigationOptions: {
      tabBar: {
        label: I18n.t('NewRoom.label', { defaultValue: 'New Room' }),
        icon: ({ tintColor }) => (
          <Image
            source={require('../../assets/icon/newR.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    }
  },
  Smile: {
    screen: Smile,
    navigationOptions: {
      tabBar: {
        label: ' ',
        icon: ({ tintColor }) => (
          <Image
            source={require('../../assets/icon/SmileR.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    }
  },
  RoomList: {
    screen: RoomList,
    navigationOptions: {
      tabBar: {
        label: I18n.t('RoomList.label', { defaultValue: 'List' }),
        icon: ({ tintColor }) => (
          <Image
            source={require('../../assets/icon/myRoomR.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBar: {
        label: I18n.t('Me.label', { defaultValue: 'Me' }),
        icon: ({ tintColor }) => (
          <Image
            source={require('../../assets/icon/myInfoR.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    }
  }
})

@connect(...[, dispatch => ({dispatch})])
export default class Home extends Component {
  _messagePolling = async () => {
    try {
      console.log('开始轮训')
      await this.props.dispatch(MessagePolling)
      console.log('即将开始下一轮轮训')
      setTimeout(this._messagePolling, 1000)
    } catch (err) {
      Alert.alert('消息轮训错误', err)
      setTimeout(this._messagePolling, 1000)
    }
  }
  componentDidMount() {
    this._messagePolling()
  }
  render() {
    return (
      <HomeRouter/>
    )
  }
}
