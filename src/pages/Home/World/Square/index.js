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
import api from '../../../../api'

@connect(state=>({world: state.room.world, token: state.auth.token}), dispatch => ({dispatch}))
export default class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      isFetching: false,
      next: this.props.world.next,
      data: []
    }
  }

  _onRefresh = async () => {
    this.setState({refreshing: true})
    await this.props.dispatch(FetchLatestRoomList)
    await this.props.dispatch(FetchWorldRoomList)
    this.setState({
      refreshing: false,
      next: this.props.world.next,
      data: [],
    })
  }

  _fetchNextRoomList = async () => {
    try {
      if (this.state.next) {
        this.setState({isFetching: true})
        const res = await api.fetchDataFromUrl(this.state.next)(this.props.token)
        if (res.status === 200) {
          const data = await res.json()
          this.setState({
            next: data.next,
            data: this.state.data.concat({title: '', content: data.results}),
            isFetching: false
          })
        } else throw new Error('Fetch World Status Code Error')
      }
    } catch (err) {
      console.log(err)
      this.setState({isFetching: false})
    }
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
        <Content
          fetchNextRoomList={this._fetchNextRoomList}
          next={this.state.next}
          isFetching={this.state.isFetching}
          newRoomList={this.state.data}
        />
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})
