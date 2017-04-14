/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import styles from '../common/styles'

export default class RoomItem extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    timeRange: PropTypes.array.isRequired,
    max_participants: PropTypes.number.isRequired,
    participant_count: PropTypes.number.isRequired
  }

  _transferTimeFormat(timeRange) {
    let start = new Date(timeRange[0])
    let end = new Date(timeRange[1])
    return [
      `开始: ${1900+start.getYear()}年${start.getMonth()+1}月${start.getDate()}日${start.getHours()}时${start.getMinutes()}分`,
      `结束: ${1900+end.getYear()}年${end.getMonth()+1}月${end.getDate()}日${end.getHours()}时${end.getMinutes()}分`,
    ]
  }

  render () {
    const timeRange = this._transferTimeFormat(this.props.timeRange)
    return (
      <View style={[styles.fullFlexWidth, localStyles.container]}>
        <View>
          <Image source={{url: this.props.src}} style={[styles.flex1, localStyles.cover]}/>
        </View>
        <View style={[localStyles.wrap]}>
          <View style={[styles.flex2, styles.fullFlexWidth, {alignItems: 'flex-start'}]}>
            <View style={[styles.fullFlexWidth, localStyles.header]}>
              <View style={[localStyles.tag]}>
                <Text style={{color: 'white'}}>
                  HOT
                </Text>
              </View>
              <View style={[styles.flex1]}>
                <Text style={[localStyles.title]}>
                  {this.props.title}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.flex1, {justifyContent: 'flex-end'}]}>
            <Text style={[localStyles.text]}>
              {this.props.place}
            </Text>
            <View style={[localStyles.footer]}>
              <View>
                <Text style={[localStyles.time, localStyles.text]}>
                  {timeRange[0]}
                </Text>
                <Text style={[localStyles.time, localStyles.text]}>
                  {timeRange[1]}
                </Text>
              </View>
              <View style={[localStyles.people]}>
                <Text style={[{color: 'white'}]}>
                  <Image style={[localStyles.icon]} source={require('../assets/icon/participants.png')}/>
                  <Text> {this.props.max_participants ? this.props.participant_count + '/' + this.props.max_participants : '不限'}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  text: {
    color: '#ec5367'
  },
  title: {
    marginLeft: 10
  },
  time: {
    fontSize: 10
  },
  container: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 12,
    height: 110,
  },
  wrap: {
    marginLeft: 20,
    flex: 1
  },
  cover: {
    width: 120,
    height: 50,
    borderRadius: 10,
  },
  tag: {
    backgroundColor: '#345586',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  people: {
    backgroundColor: '#ec5367',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    // width: 80
  },
  footer: {
    marginTop: 3,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  icon: {
    width: 8,
    height: 10,
  },
})
