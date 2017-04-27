/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native'
import I18n from 'react-native-i18n'

import styles from '../../common/styles'
import BackgroundImage from '../../components/BackgroundImage'


export default class UserCover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  render () {
    const { name, signature, thumb_ups, thumb_downs, followers, follows } = this.props.user
    const { avatar_thumbnail, gender, avatar } = this.props.user
    return (
      <BackgroundImage bgUrl={require('../../assets/infoImage.jpg')}>
        <View style={[styles.flex1, coverStyles.container]}>
          <TouchableWithoutFeedback onPress={() => this.setState({showModal: true})}>
            <Image style={[coverStyles.avatar]} source={{url: avatar_thumbnail}} />
          </TouchableWithoutFeedback>
          <Modal
            visible={this.state.showModal}
            animationType={"fade"}
          >
            <View style={[styles.flex1, styles.flexCenter]}>
              <TouchableWithoutFeedback style={[{width: '100%', height: '100%'}]} onPress={() => this.setState({showModal: false})}>
                <Image style={[{resizeMode: 'contain', width: '100%', height: '100%'}]} source={{url: avatar}}/>
              </TouchableWithoutFeedback>
            </View>
          </Modal>
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

