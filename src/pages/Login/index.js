/**
 * Created by huangwx on 10/04/2017.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'

import Input from './Input'
import LoginButton from '../../components/StyleButton'
import BackgroundImage from '../../components/BackgroundImage'

export default class Login extends Component {
  login () {
  }
  visit () {

  }
  signup () {

  }

  render () {
    return (
      <View style={{flex: 1}}>
        <BackgroundImage bgUrl={require('../../assets/background.jpg')}>
          <View style={loginStyles.container}>
            <Image
              source={require('../../assets/Logo.png')}
              style={loginStyles.logo}
            />
            <Input placeholder="手机号" icon={require('../../assets/UserIcon.png')} />
            <Input placeholder="密码" icon={require('../../assets/PasswordIcon.png')} />
            <LoginButton
              title="登录"
              onPress={this.login}
              inlineStyle={loginStyles.loginButton}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={loginStyles.otherView}>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.visit}>
                  <Text style={{color: 'white'}}>游客登录</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.signup}>
                  <Text style={{color: 'white'}}>注册</Text>
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
