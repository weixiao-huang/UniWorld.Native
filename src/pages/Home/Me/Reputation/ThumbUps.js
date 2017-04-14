/**
 * Created by huangwx on 14/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import I18n from 'react-native-i18n'

import styles from '../../../../common/styles'


export default class ThumbUps extends Component {
  static propTypes = {
    thumb_ups: PropTypes.number.isRequired
  }

  render() {
    return (
      <View style={[styles.fullFlexWidth, styles.flexCenter, thumbStyles.header]}>
        <View style={[thumbStyles.thumb_ups__title]}>
          <Text style={[thumbStyles.thumb_ups__title__text]}>{I18n.t('Me.credit.likes')}</Text>
        </View>
        <View style={[styles.flex1]}>
          <Text style={[thumbStyles.thumb_ups__content__text]}>{this.props.thumb_ups}</Text>
        </View>
      </View>
    )
  }
}

const thumbStyles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#c4caf2',
    backgroundColor: 'white'
  },
  thumb_ups__title: {
    borderWidth: 1,
    borderColor: '#ff5757',
    borderRadius: 50,
    padding: 15,
    margin: 15
  },
  thumb_ups__title__text: {
    color: '#5356cc',
    fontSize: 18
  },
  thumb_ups__content: {

  },
  thumb_ups__content__text: {
    color: '#3555b6',
    fontSize: 16
  }
})
