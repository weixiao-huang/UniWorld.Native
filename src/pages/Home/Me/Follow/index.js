/**
 * Created by huangwx on 14/04/2017.
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet, ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'


export default class Follow extends Component {
  render() {
    return (
      <ScrollView style={[styles.flex1]}>
        <Text style={[followStyles.title]}>关注的人</Text>
      </ScrollView>
    )
  }
}

const followStyles = StyleSheet.create({
  title: {
    backgroundColor: 'white',
    fontSize: 16,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 20
  }
})
