/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import styles from '../common/styles'

const mapStateToProps = state => ({
  myFollows: state.user.userInfo && state.user.userInfo.follows
})

@connect(mapStateToProps)
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

  constructor(props) {
    super(props)
    this.state = {
      roomFollows: this.props.myFollows && this._getRoomFollows()
    }
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

  _getRoomFollows = () => {
    let roomFollows = []
    for (let follow of this.props.myFollows) {
      if (this.props.participant_ids.indexOf(follow.id) !== -1) {
        roomFollows.push(follow)
      }
    }
    return roomFollows
  }

  render () {
    // const timeRange = this._transferTimeFormat(this.props.timeRange)
    const showTime = this._transferTimeFormat(this.props.timeRange)
    const length = 18
    let showPeople = this.props.max_participants ? this.props.participant_count + '/' + this.props.max_participants : '不限'
    if (showPeople.length>5)
      showPeople = this.props.participant_count + '/..'

    return (
      <View>
        {this.state.roomFollows && this.state.roomFollows.length > 0 && <View>
          <View style={[styles.fullFlexWidth, localStyles.avatar_wrap]}>
            {this.state.roomFollows.slice(0, 3).map((item, index) => (
              <Image key={index} style={[localStyles.avatar]} source={{uri: item.avatar}} />
            ))}
            <Text style={[localStyles.header__text]}>
              Your friends {this.state.roomFollows.length > 2 ? this.state.roomFollows[0].name.slice(0, 5) : this.state.roomFollows[0].name} {this.state.roomFollows.length > 1 ? `...` : null} joined this room
            </Text>
          </View>
        </View>}
        <View style={[styles.fullFlexWidth, localStyles.container]}>
          <View style={[localStyles.cover_wrap]}>
            <Image source={{uri: this.props.src}} style={[localStyles.cover]}/>
          </View>
          <View style={[localStyles.wrap]}>
            <View style={[styles.flex2, styles.fullFlexWidth, {alignItems: 'flex-start'}]}>
              <View style={[styles.fullFlexWidth, localStyles.header]}>
                {/*<View style={[styles.flex1]}>*/}
                  <View style={[localStyles.tag_wrap]}>
                    <Text style={[localStyles.tag]}>
                      {this.props.titleLabel?this.props.titleLabel : 'HOT'}
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
                <View style={[localStyles.people, this.props.max_participants && this.props.participant_count >= this.props.max_participants && {backgroundColor: '#aaa'}]}>
                  <Text style={[{color: 'white'}]}>
                    <Image style={[localStyles.icon]} source={require('../assets/icon/participants.png')}/>
                    <Text> {showPeople}</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const avatarSize = 24

const localStyles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: 'row',
    flex: 1,
  },
  avatar_wrap: {
    marginLeft: 14,
    marginTop: 10,
    marginBottom: -6,
    alignItems: 'center'
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    margin: 2
  },
  header__text: {
    paddingLeft: 10,
    color: '#ccc'
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
    height: '100%',
    resizeMode: 'cover'
  },
  tag_wrap: {
    backgroundColor: '#345586',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width:45,
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
