/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import ScrollTabView from 'react-native-scrollable-tab-view'
import Info from './Info'
import Detail from './Detail'

import styles from '../../common/styles'

export default class RoomInfo extends Component {
  render() {
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <ScrollTabView
          style={{flex: 2}}
          // tabBarBackgroundColor="#ec5367"
          // tabBarTextStyle={localStyles.tabBarText}
          // tabBarUnderlineStyle={localStyles.tabBarUnderline}
        >
          <Info tabLabel={I18n.t('World.Square.label')}/>
          <Detail tabLabel={I18n.t('World.Recommend.label')}/>
        </ScrollTabView>
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  container: {

  }
})
