/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native'
import styles from '../../../../common/styles'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import { FetchRecommendRoomList } from '../../../../store/actions'

import RoomWrap from '../../../../components/RoomWrap'

const mapStateToProps = state => ({
  recommend: state.room.recommend,
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Recommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }
  _onRefresh = async () => {
    this.setState({refreshing: true})
    await this.props.dispatch(FetchRecommendRoomList)
    this.setState({refreshing: false})
  }

  render () {
    console.log('渲染Recommend')
    return (
      <ScrollView
        style={[localStyles.container]}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
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
