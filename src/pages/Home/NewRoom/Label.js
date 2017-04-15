/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import styles from '../../../common/styles'

export default class Label extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({

})
