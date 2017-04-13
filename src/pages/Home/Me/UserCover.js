/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from '../../../common/styles'
import BackgroundImage from '../../../components/BackgroundImage'


@connect(state => ({userInfo: state.user.userInfo}))
export default class UserCover extends Component {
  render () {
    const { username, signature, p_thumb_ups, h_thumb_ups, followers, follows, joined_count } = this.props.userInfo
    return (
      <BackgroundImage bgUrl={require('../../../assets/infoImage.jpg')}>
        <View style={[styles.flex1, coverStyles.container]}>
          <Image style={[coverStyles.avatar]} source={require('../../../assets/avatar.png')} />
          <View style={[styles.flex1, coverStyles.box]}>
            <View style={[styles.transparent, coverStyles.titleBox]}>
              <Image style={{width: 20, height: 20}} source={require('../../../assets/icon/female.png')} />
              <Text
                style={[styles.transparent, {marginLeft: 10, color: 'white', fontSize: 20, fontWeight: 'bold'}]}
              >
                {username}
              </Text>
            </View>
            <Text
              style={[styles.transparent, {marginTop: 5, color: 'white'}]}
            >
              {signature}
            </Text>
            <Text
              style={[styles.transparent, coverStyles.tips, {color: '#d3d4f2'}]}
            >
              {followers.length + follows.length} 好友 | {joined_count} 参与 | {p_thumb_ups + h_thumb_ups} 赞
            </Text>
          </View>
        </View>
      </BackgroundImage>
    )
  }
}

const avatarSize = 80

const coverStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 30,
    paddingTop: 20
  },
  tips: {
    marginTop: 20
  },
  box: {
    marginLeft: 30
  },
  titleBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white'
  }
})

