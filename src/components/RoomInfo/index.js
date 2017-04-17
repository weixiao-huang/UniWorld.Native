/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import Info from './Info'
import Detail from './Detail'

import styles from '../../common/styles'

export default class RoomInfo extends Component {
  render() {
    console.log('房间信息roomInfo: ', this.props.roomInfo)
    const { params: { id } } = this.props.navigation.state
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <ScrollTabView
          style={{flex: 2}}
          // tabBarBackgroundColor="#ec5367"
          // tabBarTextStyle={localStyles.tabBarText}
          // tabBarUnderlineStyle={localStyles.tabBarUnderline}
        >
          <Info tabLabel={I18n.t('Room.Info.title')}/>
          <Detail tabLabel={I18n.t('Room.Detail.title')}/>
        </ScrollTabView>
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  container: {

  }
})
