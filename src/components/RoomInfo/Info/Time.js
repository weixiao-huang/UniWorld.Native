/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import styles from '../../../common/styles'

export default class Time extends Component {
  static propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
  }
getShowTime(startTime, endTime){
  var showTime = ''
  if (startTime != null) {
    var start = new Date(startTime)
    console.log(start)
    var start_month = (start.getMonth() + 1).toString()
    var start_date = (start.getDate()).toString()
    var start_hour = (start.getHours()).toString()
    var start_min = start.getMinutes()
    if (start_min < 10) {
      start_min = '0' + start_min.toString()
    }
    else {
      start_min = start_min.toString()
    }
  }
  if (endTime != null) {
    var end = new Date(endTime)
    var end_month = (end.getMonth() + 1).toString()
    var end_date = (end.getDate()).toString()
    var end_hour = (end.getHours()).toString()
    var end_min = end.getMinutes()
    if (end_min < 10) {
      end_min = '0' + end_min.toString()
    }
    else {
      end_min = end_min.toString()
    }
  }
  if (startTime != null && endTime != null) {
    if (start_month == end_month) {
      showTime += start_month
      if (start_date == end_date) {
        showTime += '月' + start_date + '日 ' + start_hour + ':' + start_min + ' - ' + end_hour + ':' + end_min
      }
      else {
        showTime += '月' + start_date + '日 ' + start_hour + ':' + start_min + ' - ' + end_date + '日 ' + end_hour + ':' + end_min
      }
    }
    else {
      showTime = start_month + '月' + start_date + '日 ' + start_hour + ':' + start_min + ' - ' + end_month + '月' + end_date + '日 ' + end_hour + ':' + end_min
    }
    return(showTime)
  }
  else if (startTime == null && endTime == null) {
    showTime = '待定'
    return (showTime)
  }
  else if (startTime != null && endTime == null) {
    showTime = start_month + '月' + start_date + '日 '
    return (showTime)
  }
}
  render() {
    return (
      <View style={[styles.fullFlexWidth, localStyles.time]}>
        <View style={[localStyles.time__left]}>
          <Text style={[localStyles.time__left__text]}>短期</Text>
        </View>
        <View style={[localStyles.time__right]}>
          <Text style={[localStyles.time__right__text]}>{this.getShowTime(this.props.start,this.props.end)}</Text>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  time: {
    alignItems: 'center',
    margin:20,
    paddingBottom:10
  },
  time__left: {
    borderWidth: 1,
    // padding: 14,
    marginRight: 10,
    borderRadius: 50,
    borderColor: '#ff5757',
    width:50,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time__left__text: {
    fontSize: 18,
    color: '#5053ca'
  },
  time__right: {
  },
  time__right__text: {
    fontSize: 18,
    padding: 4,
    color: '#ff5757'
  }
})
