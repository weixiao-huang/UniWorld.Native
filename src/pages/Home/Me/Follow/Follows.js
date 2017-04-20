/**
 * Created by huangwx on 18/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { Image, Button, StyleSheet, TouchableOpacity, ScrollView, View, Text } from 'react-native'
import styles from '../../../../common/styles'
import Avatar from '../../../../components/Avatar'

export default class Follows extends Component {
  static propTypes = {
    follows: PropTypes.array.isRequired
  }

  render() {
    const length = 7
    return (
      <View style={[styles.rowFlex, styles.flexWrap, styles.whiteBackground, localStyles.container]}>
        {this.props.follows.map((item, index) =>
          <View key={index} style={[localStyles.wrap]}>
            <View style={[localStyles.icon]}>
              <Avatar size={68} id={item.id} avatar={item.avatar}/>
            </View>
            <Text style={[localStyles.icon__text, styles.flexWrap]}>
              {
                item.name.length > length ? item.name.slice(0, length) + '...' : item.name
              }
            </Text>
          </View>
        )}
      </View>
    )
  }
}

const iconSize = 68
const localStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderTopColor: '#f2f0f4',
    borderTopWidth: 1,
    // justifyContent: 'center'
  },
  wrap: {
    alignItems: 'center'
  },
  icon: {
    margin: 10
  },
  icon__img: {
    width: iconSize,
    height: iconSize,
    borderRadius: iconSize / 2,
    borderWidth: 1,
    borderColor: '#ec5367'
  },
  icon__text: {
    width: 60,
    textAlign: 'center',
    lineHeight: 18
  }
})
