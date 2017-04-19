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

import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import { Visit, UserLogin } from '../../store/actions'

import Input from './Input'
import LoginButton from '../../components/StyleButton'
import BackgroundImage from '../../components/BackgroundImage'

@connect(...[, dispatch=>({dispatch})])
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  @autobind
  async login () {
    await this.props.dispatch(UserLogin(this.state))
  }

  @autobind
  visit () {
    this.props.dispatch(Visit)
  }

  @autobind
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
            <Input
              placeholder={I18n.t('Login.username')}
              icon={require('../../assets/UserIcon.png')}
              onChangeText={text => this.setState({username: text})}
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
