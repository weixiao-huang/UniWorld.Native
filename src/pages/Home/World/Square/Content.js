/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

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
    console.log(this.props.latest.results)
    return (
      <View>
        <RoomWrap title={I18n.t('World.Square.recommend')} roomList={this.props.recommend.hot}/>
        <RoomWrap title={I18n.t('World.Square.latest')} roomList={this.props.latest.results}/>
        <RoomWrap title={I18n.t('World.Square.world')} roomList={this.props.world.results}/>
      </View>
    )
  }
}
