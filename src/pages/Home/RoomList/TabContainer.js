/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { Image, ScrollView, View, StyleSheet, Dimensions } from 'react-native'
import styles from '../../../common/styles'

import RoomWrap from '../../../components/RoomWrap'

export default class TabContainer extends Component {
  static propTypes = {
    roomList: PropTypes.array.isRequired
  }
  static defaultProps = {
    title: ''
  }
  render() {
    return (
      <ScrollView style={[localStyles.container]}>
        {this.props.roomList.length
          ? <RoomWrap title={this.props.title} roomList={this.props.roomList}/>
          : <View style={[styles.flexCenter]}><Image style={[localStyles.empty]} source={require('../../../assets/emptyList.png')}/></View>
        }
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
