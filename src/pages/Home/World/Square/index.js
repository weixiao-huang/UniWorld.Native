/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text} from 'react-native'
import styles from '../../../../common/styles'

import WorldSwiper from './WorldSwiper'
import Content from './Content'

export default class Square extends Component {
  render () {
    return (
      <ScrollView style={[styles.flex1, localStyles.container]}>
        <WorldSwiper/>
        <Content/>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})
