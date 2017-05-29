import React, { Component, PropTypes } from 'react'

import {
  MainView,
  BackgroundView,
  LogoImage,
} from './style'

import Button from '../../components/Button'
import BackgroundImage from '../../components/BackgroundImage'
import Input from './components/Input'

const bgUrl = require('./img/background.jpg')
const logoUrl = require('./img/Logo.png')

const userIcon = require('./img/UserIcon.png')
const passIcon = require('./img/PasswordIcon.png')

export default class Login extends Component {
  login = () => {

  }
  render() {
    return (
      <MainView>
        <BackgroundImage bgUrl={bgUrl}>
          <BackgroundView>
            <LogoImage source={logoUrl} />
            <Input
              placeholder="username"
              icon={userIcon}
            />
            <Input
              placeholder="password"
              icon={passIcon}
            />
            <Button
              title="login"
              onPress={this.login}
              inlineStyle={{ marginTop: 10 }}
            />
          </BackgroundView>
        </BackgroundImage>
      </MainView>
    )
  }
}
