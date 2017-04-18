/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import styles from '../../../../common/styles'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'

import WorldSwiper from './WorldSwiper'
import Content from './Content'

import { GetLatestRoomList, GetWorldRoomList } from '../../../../store/actions'

const mapStateToProps = state => ({
  refreshing: state.room.refreshing
})

@connect(...[, dispatch => ({dispatch})])
export default class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  @autobind
  async _onRefresh() {
    this.setState({refreshing: true})
    await this.props.dispatch(GetLatestRoomList)
    await this.props.dispatch(GetWorldRoomList)
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
