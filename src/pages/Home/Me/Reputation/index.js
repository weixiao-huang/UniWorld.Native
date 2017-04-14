/**
 * Created by huangwx on 14/04/2017.
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet, ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'

import ThumbUps from './ThumbUps'
import ThumbDowns from './ThumbDowns'

const mapStateToProps = state => ({
  thumb_ups: state.user.userInfo.p_thumb_ups,
  thumb_downs: state.user.userInfo.p_thumb_downs,
})

@connect(mapStateToProps)
export default class Reputation extends Component {
  render() {
    return (
      <ScrollView style={[styles.flex1]}>
        <ThumbUps thumb_ups={this.props.thumb_ups}/>
        <ThumbDowns thumb_downs={this.props.thumb_downs}/>
      </ScrollView>
    )
  }
}

const repuStyles = StyleSheet.create({
})
