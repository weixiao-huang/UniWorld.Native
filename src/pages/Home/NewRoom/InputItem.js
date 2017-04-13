/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styles from '../../../common/styles'

export default class InputItem extends Component {
  render () {
    return (
      <View style={[inputStyles.view, styles.whiteBackground]}>
        <Text style={inputStyles.title}>
          {this.props.title}
        </Text>
        {this.props.children}
      </View>
    )
  }
}

const inputStyles = StyleSheet.create({
  view: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f2f0f4'
  },
  title: {
    color: '#6d698b',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold'
  }
})
