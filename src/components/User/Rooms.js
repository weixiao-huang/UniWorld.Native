/**
 * Created by huangwx on 18/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'
import styles from '../../common/styles'

export default class Rooms extends Component {
  static propTypes = {
    isFollowed: PropTypes.bool.isRequired
  }
  render() {
    return (
      <View style={[styles.flex1]}>
        {this.props.isFollowed
          ?
          <View>

          </View>
          :
          <View style={[localStyles.unfollow, styles.flex1, styles.flexCenter]}>
            <Image style={[localStyles.unfollow__img]} source={require('../../assets/unfollowed.png')}/>
          </View>
        }
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  unfollow: {
    marginTop: -50
  },
  unfollow__img: {
    resizeMode: 'contain',
    height: 200,
  }
})
