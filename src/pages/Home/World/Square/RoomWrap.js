/**
 * Created by huangwx on 14/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import styles from '../../../../common/styles'

import RoomItem from '../../../../components/RoomItem'

export default class Content extends Component {
  static propTypes = {
    roomList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }
  render () {
    return (
      <View style={[styles.flex1]}>
        <View style={[localStyles.title, styles.fullFlexWidth, {alignItems: 'center'}]}>
          <Image style={[localStyles.title__icon]} source={require('../../../../assets/Star.png')}/>
          <Text style={[localStyles.title__content]}> {this.props.title}</Text>
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
