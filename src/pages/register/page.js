import React, { Component, PropTypes } from 'react'
import { StatusBar } from 'react-native'
import ImagePicker from 'react-native-image-picker'

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
import UploadButton from './components/UploadButton'
import AuthButton from './components/AuthButton'
import NavArea from '../login/components/NavArea'

const bgUrl = require('@/img/image/registerBg.jpg')
const logoUrl = require('@/img/image/Logo.png')

const userIcon = require('@/img/icon/UserIcon.png')
const passIcon = require('@/img/icon/PasswordIcon.png')
const emailIcon = require('@/img/icon/email.png')
const stuIcon = require('@/img/icon/card.png')

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordAgain: '',
      email: '',
      stuCard: '',
      emailAuth: false,
    }
  }
  register = () => {

  }

  _emailAuth() {
    this.setState({
      emailAuth: true,
    })
  }

  _stuAuth() {
    this.setState({
      emailAuth: false,
    })
  }

  _uploadImage() {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      returnBase64Image: true,
      returnIsVertical: false,
    }
    this.setState({ isUploading: true })
    ImagePicker.showImagePicker(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        this.setState({ isUploading: false })
      }
      else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
        this.setState({ isUploading: false })
      }
      else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        this.setState({ isUploading: false })
      }
      else {
        this.setState({
          stuCard: res.uri, // 'data:image/jpeg;base64,' + res.data, //  cover.uri,
        })
      }
    })
  }

  findPassword(){

  }
  login(){

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
              placeholder={I18n.t('Register.username')}
              icon={userIcon}
            />
            <AuthButton
              emailAuth={this._emailAuth.bind(this)}
              stuAuth={this._stuAuth.bind(this)}
            />
            {this.state.emailAuth ?
              <Input
                onChangeText={email => this.setState({ email })}
                placeholder={I18n.t('Register.email')}
                icon={emailIcon}
              /> :
              <UploadButton
                onPress={this._uploadImage.bind(this)}
                title={I18n.t('Register.addImage')}
                icon={stuIcon}
              />}
            <Input
              onChangeText={password => this.setState({ password })}
              placeholder={I18n.t('Register.password')}
              secureTextEntry
              icon={passIcon}
            />
            <Input
              onChangeText={passwordAgain => this.setState({ passwordAgain })}
              placeholder={I18n.t('Register.passwordAgain')}
              secureTextEntry
              icon={passIcon}
            />
            <StyledButton
              title={I18n.t('Register.register')}
              onPress={this.register}
            />
            <NavArea
              nav1={this.findPassword}
              title1={I18n.t('Register.findPassword')}
              nav2={this.login}
              title2={I18n.t('Register.login')}
            />
          </BackgroundView>
        </BackgroundImage>
      </MainView>
    )
  }
}
