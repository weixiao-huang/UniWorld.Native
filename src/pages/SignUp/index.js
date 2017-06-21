/**
 * Created by huangwx on 10/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal, Platform, Alert, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import {
  Visit, UserLogin, GoToHome, FetchUserInfo, SetCommonData, GoToLogin, GoToForgetPassword, UploadIdCard
} from '../../store/actions'

import ImagePicker from 'react-native-image-picker'
import api from '../../api'
import Input from '../Login/Input'
import LoginButton from '../../components/StyleButton'
import BackgroundImage from '../../components/BackgroundImage'
import Loading from '../../components/Loading'

const mapStateToProps = state => ({
  loading: state.common.loading
})

@connect(mapStateToProps, dispatch => ({ dispatch }))
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      passwordCheck: '',
      emailAuth:true
    }
  }

  forgetPassword = async () => {
    this.props.dispatch(GoToForgetPassword)
  }

  _disabled() {
    return (this.state.username.length != 11 || this.state.password != this.state.passwordCheck || this.state.email.length < 6)
  }

  signUp = async () => {
    let email = this.state.email
    if (this.state.username.length != 11) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('SignUp.failTextInfoTel'),
        [
          { text: 'OK', onPress: () => { } },
        ]
      )
    }
    else if ((email.substr(email.search('edu.cn')) != 'edu.cn') && this.state.emailAuth) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('SignUp.failEmailEdu'),
        [
          { text: 'OK', onPress: () => { } },
        ]
      )
    }
    else if (!this.state.stuCard && !this.state.emailAuth) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('SignUp.failIdCard'),
        [
          { text: 'OK', onPress: () => { } },
        ]
      )
    }
    else if (this.state.password.length > 20 || this.state.password.length < 6) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('SignUp.failPassword2'),
        [
          { text: 'OK', onPress: () => { } },
        ]
      )
    }
    else if (this.state.password != this.state.passwordCheck) {
      Alert.alert(
        I18n.t('tips'),
        I18n.t('SignUp.failPassword'),
        [
          { text: 'OK', onPress: () => { } },
        ]
      )
    }
    else {
      let res
      if (this.state.emailAuth) {
        let data = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        }
        res = await api.signUp(data)
        console.log(res)
        console.log(res.json())
      }
      else {
        let formData = new FormData()
        formData.append('id_card', {
          uri: this.state.stuCard,
          name: 'id_card',
        }) //, type: 'application/octet-stream'})
        formData.append('username',this.state.username)
        formData.append('password',this.state.password)
        console.log(formData)
        res = await api.uploadIdCard(formData)
        console.log(res)
        console.log(res.json())
      }
      switch (res.status) {
        //成功
        case 201: {
          Alert.alert(
            I18n.t('SignUp.succeedTitle'),
            I18n.t('SignUp.succeedText'),
            [
              { text: 'OK', onPress: () => { this.props.dispatch(GoToLogin) } },
            ]
          )
          break
        }

        //账号重复
        case 400: {

          Alert.alert(
            I18n.t('SignUp.failTitle'),
            I18n.t('SignUp.failTextTel'),
            [
              { text: 'OK', onPress: () => { } },
            ]
          )
          break
        }

        //scholl fail
        case 401: {
          Alert.alert(
            I18n.t('SignUp.failTitle'),
            I18n.t('SignUp.failTextSchool'),
            [
              { text: 'OK', onPress: () => { } },
            ]
          )
          break
        }
        case 500: {
          Alert.alert(
            I18n.t('SignUp.failTitle'),
            I18n.t('SignUp.failTextEmail'),
            [
              { text: 'OK', onPress: () => { } },
            ]
          )
          break
        }
        default: {
          Alert.alert(
            I18n.t('SignUp.failTitle'),
            I18n.t('SignUp.failTextDefault'),
            [
              { text: 'OK', onPress: () => { } },
            ]
          )
        }
      }
    }
  }

  login = async () => {
    this.props.dispatch(GoToLogin)
  }

  _emailAuth() {
    this.setState({
      emailAuth: true
    })
  }

  _imageAuth() {
    this.setState({
      emailAuth: false
    })
  }

  _showUpload = () => {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      returnBase64Image: true,
      returnIsVertical: false
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



  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Loading visible={this.props.loading} />
        <BackgroundImage bgUrl={require('../../assets/image/registerBg.jpg')} inlineStyle={{height: this.state.emailAuth?null:900}}>
          <View style={localStyles.container}>
            <Image
              source={require('../../assets/Logo.png')}
              style={localStyles.logo}
            />
            <Input
              placeholder={I18n.t('SignUp.username')}
              icon={require('../../assets/icon/UserIcon.png')}
              onChangeText={text => this.setState({ username: text })}
              keyboardType="numeric"
              maxLength={11}
            />
            <View style={[localStyles.chooseArea]}>
              <TouchableOpacity style={[localStyles.chooseItem]} onPress={this._emailAuth.bind(this)}>
                <Image style={[localStyles.icon1]} source={require('../../assets/icon/email.png')} />
                <Text style={[localStyles.chooseText]}>{I18n.t('SignUp.emailAuth')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[localStyles.chooseItem]} onPress={this._imageAuth.bind(this)}>
                <Image style={[localStyles.icon2]} source={require('../../assets/icon/card.png')} />
                <Text style={[localStyles.chooseText]} >{I18n.t('SignUp.imageAuth')}</Text>
              </TouchableOpacity>
            </View>
            {this.state.emailAuth ?
              <Input
                placeholder={I18n.t('SignUp.email')}
                icon={require('../../assets/icon/email.png')}
                onChangeText={text => this.setState({ email: text })}
              /> :
              <TouchableOpacity onPress={this._showUpload.bind(this)} style={[localStyles.imageWrap]}>

                <Image source={require('../../assets/icon/card.png')} style={localStyles.icon3} />
                <View >
                  {this.state.stuCard ? <Image style={[localStyles.chooseImage]} source={{ uri: this.state.stuCard }} /> : null}
                  <Text style={[localStyles.chooseImageText]}>{I18n.t('SignUp.addImage')}</Text>
                </View>
              </TouchableOpacity>
            }
            <Input
              placeholder={I18n.t('SignUp.password')}
              icon={require('../../assets/icon/PasswordIcon.png')}
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry={true}
              maxLength={20}
            />
            <Input
              placeholder={I18n.t('SignUp.passwordAgain')}
              icon={require('../../assets/icon/PasswordIcon.png')}
              onChangeText={text => this.setState({ passwordCheck: text })}
              secureTextEntry={true}
              maxLength={20}
            />
            <LoginButton
              title={I18n.t('SignUp.signUp')}
              onPress={this.signUp}
              inlineStyle={localStyles.loginButton}

            />
            <View style={{ flexDirection: 'row' }}>
              <View style={localStyles.otherView}>
                <TouchableOpacity style={localStyles.otherButton} onPress={this.forgetPassword}>
                  <Text style={{ color: 'white' }}>{I18n.t('SignUp.findPassword')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={localStyles.otherButton} onPress={this.login}>
                  <Text style={{ color: 'white' }}>{I18n.t('SignUp.login')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BackgroundImage>
      </ScrollView>
    )
  }
}


const localStyles = StyleSheet.create({
  loginButton: {
    marginTop: 15,
    marginBottom: 15,
    padding: 15,
  },
  otherButton: {
    backgroundColor: 'transparent',
    marginBottom: 20
  },
  otherView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 30
  },
  container: {
    flex: 1,

    alignItems: 'center',
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 30
  },
  icon1: {
    width: 42,
    height: 42,
    resizeMode: "contain"
  },
  icon2: {
    marginTop: 2,
    width: 42,
    height: 38,
    resizeMode: "contain"
  },
  icon3: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 13,
  },
  chooseArea: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  chooseItem: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: 120,
    borderRadius: 6,
    opacity: 0.6,
  },
  chooseImage: {
    resizeMode: 'cover',
    height: 150,
    width: 225,
    margin: 10,
    borderRadius: 10
  },
  chooseImageText: {
    fontSize: 14,
    color: '#bcbcbc',
    textAlign: 'center',
    lineHeight: 45,
    marginLeft: 5,
  },
  imageWrap: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row'
  },
  chooseText: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 15,
    // lineHeight: 50,
    // width:'100%',
    margin: 6,
  }
})
