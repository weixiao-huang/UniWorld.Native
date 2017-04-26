/**
 * Created by huangwx on 26/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import styles from '../../common/styles'

export default class DislikeBox extends Component {
  static propTypes = {
    dislikes: PropTypes.array.isRequired,
  }
  render() {
    return (
      <View style={[localStyles.container, styles.whiteBackground]}>
        {this.props.dislikes.map((item, index) => (
          <View key={index} style={[styles.fullFlexWidth, styles.alignCenter, localStyles.wrap]}>
            <Image style={[localStyles.dislike__img]} source={require('../../assets/dislikes.png')}/>
            <View>
              <Text style={[localStyles.dislike__content__title]}>
                {item.text}
              </Text>
              <Text style={[localStyles.dislike__content__time]}>
                {(new Date(item.time)).toLocaleDateString()}
              </Text>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

const size = 40
const localStyles = StyleSheet.create({
  container: {
    marginBottom: 55
  },
  wrap: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9ef'
  },
  dislike__img: {
    width: size,
    height: size,
    marginRight: 15
  },
  dislike__content__title: {
    paddingBottom: 7,
    fontSize: 16
  },
  dislike__content__time: {
    fontSize: 12,
    color: '#999'
  }
})
