import React, { Component, PropTypes } from 'react'
import { StatusBar, KeyboardAvoidingView, Alert } from 'react-native'

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
    }
  }
  login = () => {
    const { loginAction } = this.props
    loginAction(this.state.username, this.state.password)
  }

  register = () => {
    const { toRegisterAction } = this.props
    toRegisterAction()
  }

  visitor = () => {
    this.props.resetToHomeAction()
  }
  render() {
    const {
      login: {
        requesting,
        successful,
        messages,
        errors,
      },
    } = this.props

    // if (errors.length) {
    //   Alert.alert(
    //     I18n.t('Alert.Login.title'),
    //     I18n.t('Alert.Login.content'),
    //     [
    //       {
    //         text: I18n.t('Alert.Login.confirm'),
    //         onPress: () => {},
    //       },
    //       {
    //         text: I18n.t('Alert.Login.cancel'),
    //         onPress: () => {},
    //       },
    //     ],
    //   )
    // }
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
            <BackgroundView>
              <LogoImage source={logoUrl} />
              <Input
                onChangeText={username => this.setState({ username })}
                placeholder={I18n.t('Login.username')}
                keyboardType="numeric"
                icon={userIcon}
              />
              <Input
                onChangeText={password => this.setState({ password })}
                placeholder={I18n.t('Login.password')}
                secureTextEntry
                icon={passIcon}
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
