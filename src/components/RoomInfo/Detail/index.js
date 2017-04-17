/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import styles from '../../../common/styles'

const mapStateToProps = state => ({
  roomInfo: state.room.roomInfo
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Detail extends Component {
  render() {
    return (
      <View style={[styles.flex1, styles.flexCenter, localStyles.container]}>
        <Text style={[localStyles.website]}>{I18n.t('Room.website')}</Text>
        <Text style={[localStyles.net]}>theuniworld.net</Text>
        <Image style={[localStyles.img]} source={require('../../../assets/logoPink.png')} />
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  img: {
    resizeMode: 'contain',
    width: 200
  },
  net: {
    fontSize: 36,
    color: '#ec5367',
    paddingTop: 20
  },
  website: {
    color: '#ec5367',
    fontSize: 24,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center'
  }
})
