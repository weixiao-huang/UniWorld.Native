/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import styles from '../../../../common/styles'


export default class Recommend extends Component {
  render () {
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <Text>推荐页面</Text>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})
