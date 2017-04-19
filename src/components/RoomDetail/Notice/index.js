/**
 * Created by huangwx on 18/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'

import styles from '../../../common/styles'

export default class Notice extends Component {
  render() {
    return (
      <View style={[styles.flex1]}>
        <View>
          <Text>Notice</Text>
        </View>
        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
          <TouchableOpacity
            style={[styles.flexCenter, localStyles.star]}
          >
            <Text style={[localStyles.footer__text]}>
              {I18n.t('Room.Notice.Footer.edit')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexCenter, styles.fullFlexWidth, localStyles.join]}
          >
              <Image style={[localStyles.footer__icon]} source={require('../../../assets/Logo.png')}/>
              <Text style={[localStyles.footer__text]}>
                {I18n.t('Room.Notice.Footer.new')}
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
  footer__icon: {
    width: 20,
    height: 20
  },
  footer__text: {
    padding: 16,
    color: 'white',
    fontSize: 17
  }
})
