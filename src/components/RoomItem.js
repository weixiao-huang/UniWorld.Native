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
  }

  static defaultProps = {
    max_participants: null,
    participant_count: 1
  }

  _transferTimeFormat(timeRange) {
    // let start = new Date(timeRange[0])
    // let end = new Date(timeRange[1])
    // return [
    //   `开始: ${1900+start.getYear()}年${start.getMonth()+1}月${start.getDate()}日${start.getHours()}时${start.getMinutes()}分`,
    // ]
    var showTime = ''
    var today = (new Date()).toDateString
    var today_flag = false
    if (timeRange[0] != null) {
      var start = new Date(timeRange[0])
      var start_month = (start.getMonth() + 1).toString()
      var start_date = (start.getDate()).toString()
      var start_hour = (start.getHours()).toString()
      var start_min = start.getMinutes()
      if (start.toDateString() == today) {
        today_flag = true
      }
      if (start_min < 10) {
        start_min = '0' + start_min.toString()
      }
      else {
        start_min = start_min.toString()
      }
    }
    console.log(today)
    if (timeRange[1] != null) {
      var end = new Date(timeRange[1])
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
    if (timeRange[0] != null && timeRange[1] != null) {
      if (start_month == end_month) {
        if (start_date == end_date) {
          if (today_flag) {
            showTime += '今日' + start_hour + ':' + start_min
          }
          else {
            showTime += start_month + '月' + start_date + '日 ' + start_hour + ':' + start_min
          }
        }
        else {
          showTime += start_month + '月' + start_date + '日 - ' + end_date + '日'
        }
      }
      else {
        showTime = start_month + '月' + start_date + '日 - ' + end_month + '月' + end_date + '日'
      }
      return [
      `${showTime}`,
    ]
  
    }
    else if (timeRange[0] == null && timeRange[1] == null) {
      showTime = '待定'
    }
    else if (timeRange[0] != null && timeRange[1] == null) {
      if (today_flag) {
        showTime += '今日' + start_hour + ':' + start_min
      }
      else {
        showTime = start_month + '月' + start_date + '日 ' + start_hour + ':' + start_min
      }
    }
    return [
      `${showTime}`,
    ]
  }

  render () {
    // const timeRange = this._transferTimeFormat(this.props.timeRange)
    const showTime = this._transferTimeFormat(this.props.timeRange)
    console.log(this.props)
    const length = 20
    return (
      <View style={[styles.fullFlexWidth, localStyles.container]}>
        <View style={[localStyles.cover_wrap]}>
          <Image source={{url: this.props.src}} style={[localStyles.cover]}/>
        </View>
        <View style={[localStyles.wrap]}>
          <View style={[styles.flex2, styles.fullFlexWidth, {alignItems: 'flex-start'}]}>
            <View style={[styles.fullFlexWidth, localStyles.header]}>
              {/*<View style={[styles.flex1]}>*/}
                <View style={[localStyles.tag_wrap]}>
                  <Text style={[localStyles.tag]}>
                    HOT
                  </Text>
                </View>
                <Text style={[localStyles.title]}>
                  {this.props.title.length > length ? this.props.title.slice(0, length) + '...' : this.props.title}
                </Text>
              {/*</View>*/}
            </View>
          </View>
          <View style={[styles.flex1, {justifyContent: 'flex-end'}]}>
            <Text style={[localStyles.text]}>
              {this.props.place}
            </Text>
            <View style={[localStyles.footer]}>
              <View>
                <Text style={[localStyles.time, localStyles.text]}>
                  {/*{timeRange[0]}*/}
                  {showTime}
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
    alignItems: "center",
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    color: '#ec5367',
    fontSize: 13
  },
  title: {
    marginLeft: 10,
    lineHeight: 18,
    fontSize:15,
  },
  time: {
    fontSize: 13
  },
  container: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 15,
    height: 120,
  },
  wrap: {
    marginLeft: 20,
    flex: 1
  },
  cover_wrap: {
    height: '100%',
    width: 108,
  },
  cover: {
    borderRadius: 10,
    width: '100%',
    resizeMode: 'cover'
  },
  tag_wrap: {
    backgroundColor: '#345586',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width:40, 
  },
  tag: {
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'white'
  },
  people: {
    backgroundColor: '#ec5367',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: 60
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
