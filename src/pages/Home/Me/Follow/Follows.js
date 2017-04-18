/**
 * Created by huangwx on 18/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { Image, Button, StyleSheet, TouchableOpacity, ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'
import autobind from 'autobind-decorator'

import { GoToUser, GetUser } from '../../../../store/actions'

@connect(...[, dispatch => ({dispatch})])
export default class Follows extends Component {
  static propTypes = {
    follows: PropTypes.array.isRequired
  }

  @autobind
  _gotoUser(id) {
    return () => {
      this.props.dispatch(GoToUser(id))
      this.props.dispatch(GetUser(id))
    }
  }
  
  render() {
    return (
      <View style={[styles.rowFlex, styles.flexWrap, styles.whiteBackground, localStyles.container]}>
        {this.props.follows.map((item, index) => {
          return (
            <View key={index} style={[styles.flexCenter]}>
              <TouchableOpacity onPress={this._gotoUser(item.id)} style={[localStyles.icon]}>
                <Image style={[localStyles.icon__img]} source={{uri: item.avatar}}/>
              </TouchableOpacity>
              <Text>{item.name}</Text>
            </View>
          )
        })}
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
