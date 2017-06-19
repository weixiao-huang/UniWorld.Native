import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Field } from 'redux-form'

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

const renderInput = ({ input: { onChange }, ...props }) => {
  return (
    <Input
      {...props}
      onChangeText={onChange}
    />
  )
}

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
  login = (values) => {
    const { loginAction } = this.props
    loginAction(values.username, values.password)
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
      handleSubmit,
    } = this.props
    return (
      <MainView>
        <BackgroundImage bgUrl={bgUrl}>
          <BackgroundView>
            <LogoImage source={logoUrl} />
            <Field
              name="username"
              placeholder="username"
              icon={userIcon}
              component={renderInput}
            />
            <Field
              name="password"
              placeholder="password"
              secureTextEntry
              icon={userIcon}
              component={renderInput}
            />
            <Button
              title="login"
              onPress={handleSubmit(this.login)}
              inlineStyle={{ marginTop: 10 }}
            />
          </BackgroundView>
        </BackgroundImage>
      </MainView>
    )
  }
}
