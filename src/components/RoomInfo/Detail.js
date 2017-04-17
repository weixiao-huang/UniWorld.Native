/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  roomInfo: state.room.roomInfo
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Detail extends Component {
  render() {
    return (
      <View>
        <Text>Details</Text>
      </View>
    )
  }
}
