import React, { Component } from 'react'
import { StatusBar, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import I18n from '@/locales'
import { handleApiErrors } from '@/lib/api-errors'
import api from '@/api'

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
import UploadButton from './components/UploadButton'
import AuthButton from './components/AuthButton'

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
      emailAuth: true,
    }
  }
  register = async () => {
    const { goBackAction } = this.props
    const email = this.state.email
    if (this.state.username.length !== 11) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('Register.failTextInfoTel'),
        [
          { text: 'OK', onPress: () => { } },
        ],
      )
    } else if ((email.substr(email.search('edu.cn')) !== 'edu.cn') && this.state.emailAuth) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('Register.failEmailEdu'),
        [
          { text: 'OK', onPress: () => { } },
        ],
      )
    } else if (!this.state.stuCard && !this.state.emailAuth) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('Register.failIdCard'),
        [
          { text: 'OK', onPress: () => { } },
        ],
      )
    } else if (this.state.password.length > 20 || this.state.password.length < 6) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('Register.failPassword2'),
        [
          { text: 'OK', onPress: () => { } },
        ],
      )
    } else if (this.state.password !== this.state.passwordAgain) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('Register.failPassword'),
        [
          { text: 'OK', onPress: () => { } },
        ],
      )
    } else {
      let res = null
      if (this.state.emailAuth) {
        res = await api.Register(this.state).then(handleApiErrors)
      } else {
        let formData = new FormData()
        formData.append('id_card', {
          uri: this.state.stuCard,
          name: 'id_card',
        },
        )
        formData.append('username', this.state.username)
        formData.append('password', this.state.password)
        formData.append('email', '')

        console.log(formData)
        res = await api.uploadIdCard(formData)
        console.log(res)
        console.log(res.json())
      }
      console.log(res)
      switch (res.status) {
        // 成功
        case 201: {
          if (this.state.emailAUth) {
            Alert.alert(
              I18n.t('Register.succeedTitle'),
              I18n.t('Register.succeedText'),
              [
                { text: 'OK', onPress: () => goBackAction() },
              ],
            )
          } else {
            Alert.alert(
              I18n.t('Register.succeedTitle'),
              I18n.t('Register.succeedStuText'),
              [
                { text: 'OK', onPress: () => goBackAction() },
              ],
            )
          }
          break
        }

        // 账号重复
        case 400: {
          Alert.alert(
            I18n.t('Register.failTitle'),
            I18n.t('Register.failTextTel'),
            [
              { text: 'OK', onPress: () => { } },
            ],
          )
          break
        }

        // scholl fail
        case 401: {
          Alert.alert(
            I18n.t('Register.failTitle'),
            I18n.t('Register.failTextSchool'),
            [
              { text: 'OK', onPress: () => { } },
            ],
          )
          break
        }
        case 500: {
          Alert.alert(
            I18n.t('Register.failTitle'),
            I18n.t('Register.failTextEmail'),
            [
              { text: 'OK', onPress: () => { } },
            ],
          )
          break
        }
        default: {
          Alert.alert(
            I18n.t('SignUp.failTitle'),
            I18n.t('SignUp.failTextDefault'),
            [
              { text: 'OK', onPress: () => { } },
            ],
          )
        }
      }
    }
  }

  uploadImage = () => {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      returnBase64Image: true,
      returnIsVertical: false,
    }
    this.setState({ isUploading: true })
    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        this.setState({ isUploading: false })
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
        this.setState({ isUploading: false })
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        this.setState({ isUploading: false })
      } else {
        this.setState({
          stuCard: res.uri, // 'data:image/jpeg;base64,' + res.data, //  cover.uri,
        })
      }
    })
  }

  findPassword = () => {
    const { toFindPassAction } = this.props
    toFindPassAction()
  }
  login = () => this.props.navigation.goBack()

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
              maxLength={11}
            />
            <AuthButton
              emailAuth={() => this.setState({ emailAuth: true })}
              stuAuth={() => this.setState({ emailAuth: false })}
            />
            {this.state.emailAuth ?
              <Input
                onChangeText={email => this.setState({ email })}
                placeholder={I18n.t('Register.email')}
                icon={emailIcon}
                maxLength={50}
              /> :
              <UploadButton
                onPress={this.uploadImage}
                title={I18n.t('Register.addImage')}
                icon={stuIcon}
                image={this.state.stuCard}
              />}
            <Input
              onChangeText={password => this.setState({ password })}
              placeholder={I18n.t('Register.password')}
              secureTextEntry
              icon={passIcon}
              maxLength={20}
            />
            <Input
              onChangeText={passwordAgain => this.setState({ passwordAgain })}
              placeholder={I18n.t('Register.passwordAgain')}
              secureTextEntry
              icon={passIcon}
              maxLength={20}
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
