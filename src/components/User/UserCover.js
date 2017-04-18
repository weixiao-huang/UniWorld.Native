/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import styles from '../../common/styles'
import BackgroundImage from '../../components/BackgroundImage'


@connect(state => ({user: state.user.user}))
export default class UserCover extends Component {
  render () {
    const { name, signature, thumb_ups, thumb_downs, followers, follows } = this.props.user
    const { avatar_thumbnail, gender } = this.props.user
    return (
      <BackgroundImage bgUrl={require('../../assets/infoImage.jpg')}>
        <View style={[styles.flex1, coverStyles.container]}>
          <Image style={[coverStyles.avatar]} source={{url: avatar_thumbnail}} />
          <View style={[styles.flex1, coverStyles.box]}>
            <View style={[styles.transparent, coverStyles.titleBox]}>
              <Image style={{width: 20, height: 20}} source={gender ? require('../../assets/icon/male.png') : require('../../assets/icon/female.png')} />
              <Text style={[styles.transparent, {marginLeft: 10, color: 'white', fontSize: 20, fontWeight: 'bold'}]}>
                {name}
              </Text>
            </View>
            <Text style={[styles.transparent, {marginTop: 5, color: 'white'}]}>
              {signature}
            </Text>
            <Text style={[styles.transparent, coverStyles.tips, {color: '#d3d4f2'}]}>
              {thumb_ups} {I18n.t('User.likes')} | {follows} {I18n.t('User.follows')} | {followers} {I18n.t('User.followers')}
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

