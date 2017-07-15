import React, { Component } from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import DropdownAlert from 'react-native-dropdownalert'

import I18n from '@/locales'
import BackgroundImage from '@/components/BackgroundImage'
import Loading from '@/components/Loading'

import {
  MainView,
  BackgroundView,
  LogoImage,
  StyledButton,
} from './style'

import Input from './components/Input'
import NavArea from './components/NavArea'

const bgUrl = require('./img/background.jpg')
const logoUrl = require('./img/Logo.png')

const userIcon = require('./img/UserIcon.png')
const passIcon = require('./img/PasswordIcon.png')

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      toast: null,
    }
  }

  componentDidMount() {
    if (this.props.login.errors.length) {
      this.dropdown.alertWithType('warn', 'Error', 'Username or password uncorrect')
    }
  }

  login = () => this.props.loginAction(
    this.state.username,
    this.state.password,
  )

  register = () => this.props.toRegisterAction()

  visitor = () => this.props.resetToHomeAction()

  render() {
    const {
      login: {
        requesting,
        successful,
        messages,
        errors,
      },
    } = this.props
    return (
      <MainView>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <BackgroundImage bgUrl={bgUrl}>
          <Loading visible={requesting} />
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-100}
          >
            <DropdownAlert
              ref={(e) => { this.dropdown = e }}
            />
            <BackgroundView>
              <LogoImage source={logoUrl} />
              <Input
                onChangeText={username => this.setState({ username })}
                placeholder={I18n.t('Login.username')}
                keyboardType="numeric"
                icon={userIcon}
                maxLength={11}
                underlineColorAndroid="transparent"
              />
              <Input
                onChangeText={password => this.setState({ password })}
                placeholder={I18n.t('Login.password')}
                secureTextEntry
                icon={passIcon}
                maxLength={20}
                underlineColorAndroid="transparent"
              />
              <StyledButton
                title={I18n.t('Login.login')}
                onPress={this.login}
              />
              <NavArea
                nav1={this.visitor}
                title1={I18n.t('Login.visitor')}
                nav2={this.register}
                title2={I18n.t('Login.register')}
              />
            </BackgroundView>
          </KeyboardAvoidingView>
        </BackgroundImage>
      </MainView>
    )
  }
}
