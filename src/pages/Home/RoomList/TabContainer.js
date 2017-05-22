/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { Image, ScrollView, View, StyleSheet, Dimensions, RefreshControl, Text } from 'react-native'
import styles from '../../../common/styles'
import { connect } from 'react-redux'
import { FetchRoomList } from '../../../store/actions'
import I18n from 'react-native-i18n'

import RoomWrap from '../../../components/RoomWrap'

@connect(...[, dispatch => ({dispatch})])
export default class TabContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }
  static propTypes = {
    roomList: PropTypes.array.isRequired
  }
  static defaultProps = {
    title: ''
  }
  _onRefresh = async () => {
    this.setState({refreshing: true})
    await this.props.dispatch(FetchRoomList)
    this.setState({refreshing: false})
  }
  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        style={[localStyles.container]}
      >
        {this.props.roomList.length ?
          <RoomWrap title={this.props.title} roomList={this.props.roomList}/> :
          <View style={[styles.flexCenter]}>
            <Image
              style={[localStyles.empty]}
              source={require('../../../assets/emptyList.png')}
            />
          </View>
        }
      <Text style={[localStyles.historyRecord]} onClick={this._showHistory}>{I18n.t('RoomList.historyRecord')}</Text>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  empty: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
