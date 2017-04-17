/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import RoomWrap from './RoomWrap'

const mapStateToProps = state => ({
  latest: state.room.latest,
  world: state.room.world
})

@connect(mapStateToProps)
export default class Content extends Component {
  render () {
    return (
      <View>
        <RoomWrap title={I18n.t('World.Square.latest')} roomList={this.props.latest.results}/>
        <RoomWrap title={I18n.t('World.Square.world')} roomList={this.props.world.results}/>
      </View>
    )
  }
}
