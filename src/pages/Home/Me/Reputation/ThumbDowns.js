/**
 * Created by huangwx on 14/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native'
import styles from '../../../../common/styles'


export default class ThumbDowns extends Component {
  static propTypes = {
    thumb_downs: PropTypes.number.isRequired
  }

  render() {
    return (
      <View style={[styles.fullFlexWidth, styles.flexCenter, thumbStyles.header]}>
        <View style={[thumbStyles.title]}>
          <Image style={[thumbStyles.title__image]} source={require('../../../../assets/Thumbdown.png')}/>
        </View>
        <View style={[styles.flex1]}>
          <Text style={[thumbStyles.content__text]}>TA没有收到过差评奥</Text>
        </View>
      </View>
    )
  }
}

const thumbStyles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#c4caf2',
    backgroundColor: 'white'
  },
  title: {
    padding: 10
  },
  title__image: {
    resizeMode: 'contain',
    height: 150
  },
  content__text: {
    color: '#5356cc',
    fontSize: 16
  }
})
