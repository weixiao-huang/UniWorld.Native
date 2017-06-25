import React, { Component, PropTypes } from 'react'
import { StatusBar } from 'react-native'

import I18n from '@/locales'
import Button from '@/components/Button'
import BackgroundImage from '@/components/BackgroundImage'
import Loading from '@/components/Loading'

import {
  MainView,
  BackgroundView,
  LogoImage,
  StyledButton,
} from './style'

import Input from '../login/components/Input'
import NavArea from '../login/components/NavArea'

const bgUrl = require('@/img/image/registerBg.jpg')
const logoUrl = require('@/img/image/Logo.png')

const userIcon = require('@/img/icon/UserIcon.png')
const emailIcon = require('@/img/icon/email.png')

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
    }
  }
  findPassword = () => {
  }

  register = () => {
    this.props.navigation.goBack()
  }

  login = () => {
    this.props.resetToLoginAction()
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
    return (
      <MainView>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <BackgroundImage bgUrl={bgUrl}>
          <Loading visible={requesting} />
          <BackgroundView>
            <LogoImage source={logoUrl} />
            <Input
              onChangeText={username => this.setState({ username })}
              placeholder={I18n.t('Login.username')}
              icon={userIcon}
            />
            <Input
              onChangeText={email => this.setState({ email })}
              placeholder={I18n.t('FindPassword.email')}
              icon={emailIcon}
            />
            <StyledButton
              title={I18n.t('FindPassword.findPassword')}
              onPress={this.findPassword}
            />
            <NavArea
              nav1={this.login}
              title1={I18n.t('Login.login')}
              nav2={this.register}
              title2={I18n.t('Login.register')}
            />
          </BackgroundView>
        </BackgroundImage>
      </MainView>
    )
  }
}
