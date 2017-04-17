/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import styles from '../../../../common/styles'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import RoomWrap from '../../../../components/RoomWrap'

const mapStateToProps = state => ({
  recommend: state.room.recommend,
})

@connect(mapStateToProps)
export default class Recommend extends Component {
  render () {
    return (
      <ScrollView style={[localStyles.container]}>
        <RoomWrap title={I18n.t('World.Square.recommend')} roomList={this.props.recommend.hot}/>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})
