import React, { Component } from 'react'
import { StatusBar, Alert, KeyboardAvoidingView } from 'react-native'
import I18n from '@/locales'
import BackgroundImage from '@/components/BackgroundImage'
import Loading from '@/components/Loading'
import api from '@/api'
import {
  MainView,
  BackgroundView,
  LogoImage,
  StyledButton,
  MainScroll,
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
  find = async () => {
    if (this.check()) {
      const res = await api.findPassword(this.state)
      switch (res.status) {
        case 200: {
          Alert.alert(
            I18n.t('FindPassword.succeedTitle'),
            I18n.t('FindPassword.succeedText'),
            [
              { text: 'OK', onPress: () => { this.props.dispatch(GoToLogin) } },
            ],
          )
          break;
        }
        default: {
          Alert.alert(
            I18n.t('FindPassword.fail'),
            I18n.t('FindPassword.failReason'),
            [
              { text: 'OK', onPress: () => { } },
            ],
          )
          break;
        }
      }
    } else {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('FindPassword.fillInfo'),
        [
          { text: 'OK', onPress: () => { } },
        ],
      )
    }
  }

  check = () => (this.state.username.length === 11 && this.state.email.length >= 6)

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
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-30}
          >
            <MainScroll scrollEnabled={false}>
              <Loading visible={requesting} />
              <BackgroundView>
                <LogoImage source={logoUrl} />
                <Input
                  onChangeText={username => this.setState({ username })}
                  placeholder={I18n.t('Login.username')}
                  icon={userIcon}
                  maxLength={11}
                />
                <Input
                  onChangeText={email => this.setState({ email })}
                  placeholder={I18n.t('FindPassword.email')}
                  icon={emailIcon}
                  maxLength={50}
                />
                <StyledButton
                  title={I18n.t('FindPassword.findPassword')}
                  onPress={this.find}
                />
                <NavArea
                  nav1={this.login}
                  title1={I18n.t('Login.login')}
                  nav2={this.register}
                  title2={I18n.t('Login.register')}
                />
              </BackgroundView>
            </MainScroll>
          </KeyboardAvoidingView>
        </BackgroundImage>
      </MainView>
    )
  }
}
