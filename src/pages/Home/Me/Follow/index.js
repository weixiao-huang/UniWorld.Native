/**
 * Created by huangwx on 14/04/2017.
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet, ScrollView, View, Text } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'
import Follows from './Follows'

@connect(state => ({follows: state.user.userInfo.follows}))
export default class Follow extends Component {
  render() {
    return (
      <ScrollView style={[styles.flex1]}>
        <Text style={[followStyles.title]}>{I18n.t('Me.follow.title')}</Text>
        <Follows follows={this.props.follows}/>
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
