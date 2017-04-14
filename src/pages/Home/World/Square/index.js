/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text} from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'

import WorldSwiper from './WorldSwiper'
import Content from './Content'

import { GetWorldList } from '../../../../store/actions'

const mapStateToProps = state => ({
  recommend: state.room.recommend,
  latest: state.room.latest,
  world: state.room.world
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Square extends Component {
  componentWillMount() {
    this.props.dispatch(GetWorldList)
  }

  render () {
    return (
      <ScrollView style={[styles.flex1, localStyles.container]}>
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
