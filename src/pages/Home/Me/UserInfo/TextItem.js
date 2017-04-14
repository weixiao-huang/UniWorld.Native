/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import styles from '../../../../common/styles'

export  default class LabelItem extends Component {
  render () {
    return (
      <View style={[styles.flex1, labelStyles.container]}>
        <View style={[labelStyles.inputBox]}>
          <Text style={[labelStyles.title]}>{this.props.title}</Text>
          <Text style={[labelStyles.content]}>{this.props.content}</Text>
        </View>
      </View>
    )
  }
}

const labelStyles = StyleSheet.create({
  title: {
    color: '#95a8e2',
    paddingLeft: 10,
  },
  content: {
    paddingLeft: 15
  },
  inputBox: {
    padding: 10,
    flexDirection: 'row',
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'center',
  }
})
