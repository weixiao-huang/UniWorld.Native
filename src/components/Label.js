/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

import styles from '../common/styles'

const labelBgColor = '#fbc6c7'
const labelWidth = 12
const paddingLeft = labelWidth / 2
const marginLeft = -paddingLeft
const textPadding = paddingLeft / 2
const textColor = '#fb6b6d'

export default class Label extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={[styles.rowFlex, {alignItems: 'center'}, localStyles.container]}>
        <View style={[localStyles.triangle]}></View>
        <View style={[localStyles.label, styles.rowFlex]}>
          <Text style={[localStyles.label__text, this.props.close ? {paddingRight: 0} : {paddingRight: 10}]}>{this.props.title}</Text>
          {this.props.close
            ? <TouchableOpacity onPress={this.props.onPress}>
                <Icon name="close" size={22} style={{paddingTop: 3}} color="white" />
              </TouchableOpacity>
            : null
          }
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    margin: 2
  },
  label__text: {
    color: textColor,
    paddingLeft: paddingLeft,
    paddingTop: textPadding,
    paddingBottom: textPadding,
    lineHeight: 18
  },
  label: {
    backgroundColor: labelBgColor,
    height: '100%',
    alignItems: 'center',
    marginLeft: marginLeft
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: labelWidth,
    borderRightWidth: labelWidth,
    borderBottomWidth: labelWidth,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: labelBgColor,
    transform: [
      {rotate: '-90deg'}
    ]
  }
})
