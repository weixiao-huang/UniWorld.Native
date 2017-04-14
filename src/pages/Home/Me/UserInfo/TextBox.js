/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import styles from '../../../../common/styles'

import LabelItem from './TextItem'

export default class LabelBox extends Component {
  static propTypes = {
    labels: PropTypes.array.isRequired
  }
  render () {
    return (
      <View style={[styles.flex1, labelBoxStyles.container]}>
        {this.props.labels.map((label, index) => {
          return (
            <LabelItem title={label.title} content={label.content} key={index} />
          )
        })}
      </View>
    )
  }
}

const labelBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    justifyContent: 'center',
  }
})
