/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'
import ImageCropPicker from 'react-native-image-crop-picker'
import I18n from 'react-native-i18n'

import api from '../../../api'
import styles from '../../../common/styles'
import BackgroundImage from '../../../components/BackgroundImage'
import { FetchUserInfo, SetCommonData } from '../../../store/actions'


@connect(state => ({userInfo: state.user.userInfo}), dispatch => ({ dispatch }))
export default class UserCover extends Component {

  async _uploadAvatar(){
    await ImageCropPicker.openPicker({
      width: 400,
      height: 300,
      cropping: true
    }).then(image => {
      console.log(image);
      api.upload_avatar(image)

    }, err => {
      console.log('取消')
    })
    // this.props.dispatch(FetchUserInfo)
  }

  render () {
    return (
      <BackgroundImage bgUrl={require('../../../assets/infoImage.jpg')}>
        {this.props.userInfo && <View style={[styles.flex1, coverStyles.container]}>
          <TouchableOpacity onPress={this._uploadAvatar}>
          <Image style={[coverStyles.avatar]} source={{uri: this.props.userInfo.avatar_thumbnail}} />
          </TouchableOpacity>
          <View style={[styles.flex1, coverStyles.box]}>
            <View style={[styles.transparent, coverStyles.titleBox]}>
              <Image
                style={{width: 20, height: 20}}
                source={
                  this.props.userInfo.gender ?
                  require('../../../assets/icon/male.png') :
                  require('../../../assets/icon/female.png')
                }
              />
              <Text style={[styles.transparent, {marginLeft: 10, color: 'white', fontSize: 20, fontWeight: 'bold'}]}>
                {this.props.userInfo.name}
              </Text>
            </View>
            <Text style={[styles.transparent, {marginTop: 5, color: 'white'}]}>
              {this.props.userInfo.signature}
            </Text>
            <Text style={[styles.transparent, coverStyles.tips, {color: '#d3d4f2'}]}>
              {this.props.userInfo.followers.length + this.props.userInfo.follows.length} {I18n.t('Me.cover.friends')} | {this.props.userInfo.joined_count} {I18n.t('Me.cover.joined')} | {this.props.userInfo.p_thumb_ups + this.props.userInfo.h_thumb_ups} {I18n.t('Me.cover.thumb_ups')}
            </Text>
          </View>
        </View>}
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

