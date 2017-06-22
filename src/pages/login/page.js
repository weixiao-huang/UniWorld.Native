import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
// import { Field } from 'redux-form'

import Button from '@/components/Button'
import BackgroundImage from '@/components/BackgroundImage'
import Loading from '@/components/Loading'

import {
  MainView,
  BackgroundView,
  LogoImage,
} from './style'

import Input from './components/Input'

const bgUrl = require('./img/background.jpg')
const logoUrl = require('./img/Logo.png')

const userIcon = require('./img/UserIcon.png')
const passIcon = require('./img/PasswordIcon.png')

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.object.isRequired,
    loginAction: PropTypes.func,
  }
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
              placeholder="username"
              icon={userIcon}
            />
            <Input
              onChangeText={password => this.setState({ password })}
              placeholder="password"
              secureTextEntry
              icon={passIcon}
            />
            {/* <Field
              name="username"
              placeholder="username"
              icon={userIcon}
              component={renderInput}
            />
            <Field
              name="password"
              placeholder="password"
              secureTextEntry
              icon={passIcon}
              component={renderInput}
            />*/}
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
