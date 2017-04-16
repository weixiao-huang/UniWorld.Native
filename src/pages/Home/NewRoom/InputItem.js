/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styles from '../../../common/styles'

export default class InputItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f2f0f4',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  title: {
    color: '#6d698b',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold'
  }
})
