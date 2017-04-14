/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation'

import I18n from 'react-native-i18n'

import styles from '../../common/styles'

import World from './World'
import NewRoom from './NewRoom'
import Smile from './Smile'
import RoomList from './RoomList'
import Me from './Me'


export default TabNavigator({
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


