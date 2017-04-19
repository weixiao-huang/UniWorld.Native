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
    return (
      <View style={[styles.rowFlex, styles.flexWrap, styles.whiteBackground, localStyles.container]}>
        {this.props.follows.map((item, index) =>
          <View key={index} style={[styles.flexCenter]}>
            <View style={[localStyles.icon]}>
              <Avatar size={68} id={item.id} avatar={item.avatar}/>
            </View>
            <Text>{item.name}</Text>
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
  icon: {
    margin: 10
  },
  icon__img: {
    width: iconSize,
    height: iconSize,
    borderRadius: iconSize / 2,
    borderWidth: 1,
    borderColor: '#ec5367'
  }
})
