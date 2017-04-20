/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import styles from '../../../../common/styles'
import { connect } from 'react-redux'

import WorldSwiper from './WorldSwiper'
import Content from './Content'

import { FetchLatestRoomList, FetchWorldRoomList } from '../../../../store/actions'

@connect(...[, dispatch => ({dispatch})])
export default class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  _onRefresh = async () => {
    this.setState({refreshing: true})
    await this.props.dispatch(FetchLatestRoomList)
    await this.props.dispatch(FetchWorldRoomList)
    this.setState({refreshing: false})
  }

  render () {
    return (
      <ScrollView
        style={[styles.flex1, localStyles.container]}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
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
