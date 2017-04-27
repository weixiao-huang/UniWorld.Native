/**
 * Created by huangwx on 10/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal, Platform } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import {
  Visit, UserLogin, FetchRoomList, FetchWorldRoomList, FetchRecommendRoomList,
  FetchLatestRoomList, GoToHome, FetchUserInfo
} from '../../store/actions'

import Input from './Input'
import LoginButton from '../../components/StyleButton'
import BackgroundImage from '../../components/BackgroundImage'

import Spinner from 'react-native-spinkit'

@connect(...[, dispatch=>({dispatch})])
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isVisible: false,
      type: Platform.OS === 'ios' ? 'ArcAlt' : 'WanderingCubes'
    }
  }

  login = async () => {
    console.log('登录前')
    this.setState({isVisible: true})
    await this.props.dispatch(UserLogin(this.state))
    await this.props.dispatch(FetchRoomList)
    await this.props.dispatch(FetchRecommendRoomList)
    await this.props.dispatch(FetchLatestRoomList)
    await this.props.dispatch(FetchWorldRoomList)
    await this.props.dispatch(FetchUserInfo)
    this.setState({isVisible: false})
    this.props.dispatch(GoToHome)
    console.log('登录函数完毕')
  }

  visit = async () => {
    this.props.dispatch(Visit)
  }

  signup = async () => {

  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Modal
          transparent={true}
          animationType="fade"
          visible={this.state.isVisible}
        >
          <View style={[styles.flex1, styles.flexCenter, {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]}>
            <Spinner isVisible={this.state.isVisible} size={50} color='#FFFFFF' type={this.state.type}/>
          </View>
        </Modal>
        <BackgroundImage bgUrl={require('../../assets/background.jpg')}>
          <View style={loginStyles.container}>
            <Image
              source={require('../../assets/Logo.png')}
              style={loginStyles.logo}
            />
            <Input
              placeholder={I18n.t('Login.username')}
              icon={require('../../assets/UserIcon.png')}
              onChangeText={text => this.setState({username: text})}
              keyboardType="numeric"
            />
            <Input
              placeholder={I18n.t('Login.password')}
              icon={require('../../assets/PasswordIcon.png')}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry={true}
            />
            <LoginButton
              title={I18n.t('Login.login')}
              onPress={this.login}
              inlineStyle={loginStyles.loginButton}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={loginStyles.otherView}>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.visit}>
                  <Text style={{color: 'white'}}>{I18n.t('Login.visitor')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.signup}>
                  <Text style={{color: 'white'}}>{I18n.t('Login.signup')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BackgroundImage>
      </View>
    )
  }
}


const loginStyles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
  },
  otherButton: {
    backgroundColor: 'transparent',
  },
  otherView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 60
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
  }
})
