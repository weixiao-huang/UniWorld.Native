/**
 * Created by huangwx on 18/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'
import styles from '../../../common/styles'

import AvatarBox from './AvatarBox'

export default class Member extends Component {
  render() {
    return (
      <View style={[styles.flex1]}>
        <View>
          <AvatarBox/>
        </View>
        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
          <TouchableOpacity
            style={[styles.flexCenter, localStyles.star]}
          >
            <Text style={[localStyles.footer__text]}>
              {I18n.t('Room.Member.Footer.likeRoom')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexCenter, localStyles.join]}
          >
            <Text style={[localStyles.footer__text]}>
              {I18n.t('Room.Member.Footer.likeAll')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  star: {
    flex: 1,
    backgroundColor: '#fdae57'
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
