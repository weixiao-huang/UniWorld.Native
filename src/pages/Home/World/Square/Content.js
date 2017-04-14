/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'

import RoomWrap from './RoomWrap'

const mapStateToProps = state => ({
  recommend: state.room.recommend,
  latest: state.room.latest,
  world: state.room.world
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Content extends Component {
  render () {
    console.log(this.props.recommend.hot)
    return (
      <RoomWrap roomList={this.props.recommend.hot}/>
    )
  }
}
