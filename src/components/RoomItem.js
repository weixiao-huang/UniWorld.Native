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
    timeRange: PropTypes.array.isRequired
  }
  render () {
    return (
      <View style={[styles.fullFlexWidth, itemStyle.container]}>
        <View>
          <Image source={{url: this.props.src}} style={[styles.flex1, itemStyle.cover]}/>
        </View>
        <View style={[itemStyle.wrap]}>
          <View style={[styles.flex2, styles.fullFlexWidth, {alignItems: 'flex-start'}]}>
            <View style={[itemStyle.tag]}><Text style={{color: 'white'}}>HOT</Text></View>
            <Text style={[itemStyle.title]}>
              {this.props.title}
            </Text>
          </View>
          <View style={[styles.flex1, {justifyContent: 'flex-end'}]}>
            <Text>
              {this.props.place}
            </Text>
            <View style={[itemStyle.footer]}>
              <Text>
                {this.props.timeRange[0]} - {this.props.timeRange[1]}
              </Text>
              <Text style={[itemStyle.people]}>
                <Text>
                  <Image style={[itemStyle.icon]} source={require('../assets/icon/participants.png')}/>
                </Text>
                <Text>
                  1/20
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const itemStyle = StyleSheet.create({
  title: {
    marginLeft: 10
  },
  container: {
    margin: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  wrap: {
    marginLeft: 20,
  },
  cover: {
    width: 100,
    height: 50,
    borderRadius: 10,
  },
  tag: {
    backgroundColor: '#345586',
    borderRadius: 10,
  },
  people: {
    backgroundColor: '#ec5367',
    color: 'white',
    justifyContent: 'space-between',
    marginRight: 20,
    paddingLeft: 5
  },
  footer: {
    marginTop: 3,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  icon: {
    width: 8,
    height: 10
  }
})
