/**
 * Created by huangwx on 14/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'

import RoomItem from '../../../../components/RoomItem'

export default class Content extends Component {
  static propTypes = {
    roomList: PropTypes.array.isRequired
  }
  render () {
    return (
      <View style={[styles.flex1]}>
        <View>
          <Text>强力推荐</Text>
        </View>
        <View>
          {this.props.roomList.map((item, index) => {
            return (
              <View key={index} style={[styles.flex1]}>
                <RoomItem
                  src={item.cover}
                  title={item.title}
                  place={item.location_string}
                  timeRange={[item.date_time_start, item.date_time_end]}
                />
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
