import React, { Component, PropTypes } from 'react'
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

import Input from './components/Input'

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
    console.log(this.state.username, this.state.password)
    loginAction(this.state.username, this.state.password)
    // this.props.navigation.navigate('homeTab')
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
              onChangeText={password => this.setState({ password })}
              placeholder={I18n.t('Login.password')}
              secureTextEntry
              icon={passIcon}
            />
            <StyledButton
              title={I18n.t('Login.login')}
              onPress={this.login}
            />
          </BackgroundView>
        </BackgroundImage>
      </MainView>
    )
  }
}
