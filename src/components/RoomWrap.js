/**
 * Created by huangwx on 14/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, ListView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../common/styles'

import { GoToRoomInfo, FetchRoomInfo } from '../store/actions'

import RoomItem from './RoomItem'

@connect(...[, dispatch => ({dispatch})])
export default class RoomWrap extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(this.props.roomList),
      disabled: false
    }
  }

  static propTypes = {
    roomList: PropTypes.array.isRequired,
  }
  static defaultProps = {
    title: ''
  }

  _gotoRoomInfo = id => () => {
    this.setState({disabled: true})
    this.props.dispatch(GoToRoomInfo(id))
    setTimeout(() => this.setState({disabled: false}), 1000)
  }

  render () {
    return (
      <View style={[styles.flex1]}>
        {this.props.title
          ? <View style={[localStyles.title, styles.fullFlexWidth, {alignItems: 'center'}]}>
              <Image style={[localStyles.title__icon]} source={require('../assets/Star.png')}/>
              <Text style={[localStyles.title__content]}> {this.props.title}</Text>
            </View>
          : null
        }
        <View>
          {this.props.roomList.map((item, index) => {
            return (
              <View key={index} style={[styles.flex1]}>
                <TouchableOpacity
                  disabled={this.state.disabled}
                  onPress={this._gotoRoomInfo(item.id)}
                >
                  <RoomItem
                    src={item.cover}
                    title={item.title}
                    place={item.location_string}
                    timeRange={[item.date_time_start, item.date_time_end]}
                    max_participants={item.max_participants}
                    participant_count={item.participant_count}
                  />
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  title__content: {
    fontSize: 16
  },
  title__icon: {
    width: 18,
    height: 18
  },
  title: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
})
