/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import Info from './Info/index'
import Detail from './Detail/index'

import styles from '../../common/styles'

export default class RoomInfo extends Component {
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
          <Info tabLabel={I18n.t('Room.Info.title')}/>
          <Detail tabLabel={I18n.t('Room.Detail.title')}/>
        </ScrollTabView>
        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
          <TouchableOpacity style={[styles.flexCenter, localStyles.star]}>
            <Text style={[localStyles.footer__text]}>{I18n.t('Room.Footer.star')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexCenter, localStyles.join]}>
            <Text style={[localStyles.footer__text]}>{I18n.t('Room.Footer.join')}</Text>
          </TouchableOpacity>
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
