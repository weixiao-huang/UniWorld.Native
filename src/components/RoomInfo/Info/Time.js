/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import styles from '../../../common/styles'

export default class Time extends Component {
  static propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
  }
  render() {
    return (
      <View style={[styles.fullFlexWidth, localStyles.time]}>
        <View style={[localStyles.time__left]}>
          <Text style={[localStyles.time__left__text]}>短期</Text>
        </View>
        <View style={[localStyles.time__right]}>
          <Text style={[localStyles.time__right__text]}>{this.props.start}</Text>
          <Text style={[localStyles.time__right__text]}>{this.props.end}</Text>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  time: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 30
  },
  time__left: {
    borderWidth: 1,
    padding: 14,
    marginRight: 20,
    borderRadius: 50,
    borderColor: '#ff5757'
  },
  time__left__text: {
    fontSize: 18,
    color: '#5053ca'
  },
  time__right: {
  },
  time__right__text: {
    fontSize: 20,
    padding: 4,
    color: '#ff5757'
  }
})
