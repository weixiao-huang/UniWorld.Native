/**
 * Created by huangwx on 10/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import {
  Visit, UserLogin, GoToHome, FetchUserInfo, SetCommonData, GoToLogin, GoToForgetPassword
} from '../../store/actions'

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
      passwordCheck: ''
    }
  }

  forgetPassword = async () => {
    this.props.dispatch(GoToForgetPassword)
  }

  _disabled(){
    return (this.state.username.length != 11 || this.state.password!=this.state.passwordCheck || this.state.email.length<6)
  }

  signUp = async () => {
    let email = this.state.email
    if (this.state.username.length != 11){
      Alert.alert(
          I18n.t('tips'),
          I18n.t('SignUp.failTextInfoTel'),
          [
            { text: 'OK', onPress: () => { } },
          ]
        )
    }
    else if ((email.substr(email.search('edu.cn')) != 'edu.cn')){
      Alert.alert(
          I18n.t('tips'),
          I18n.t('SignUp.failEmailEdu'),
          [
            { text: 'OK', onPress: () => { } },
          ]
        )
    }
    else if (this.state.password.length>20 || this.state.password.length<6){
      Alert.alert(
          I18n.t('tips'),
          I18n.t('SignUp.failPassword2'),
          [
            { text: 'OK', onPress: () => { } },
          ]
        )
    }
    else if (this.state.password!=this.state.passwordCheck){
      Alert.alert(
          I18n.t('tips'),
          I18n.t('SignUp.failPassword'),
          [
            { text: 'OK', onPress: () => {  } },
          ]
        )
    }
    else{
    let data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    const res = await api.signUp(data)
    console.log(res)
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
      }

      //账号重复
      case 400: {

        Alert.alert(
          I18n.t('SignUp.failTitle'),
          I18n.t('SignUp.failTextTel'),
          [
            { text: 'OK', onPress: () => {} },
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
            { text: 'OK', onPress: () => {} },
          ]
        )
        break
      }
      case 500: {
        Alert.alert(
          I18n.t('SignUp.failTitle'),
          I18n.t('SignUp.failTextEmail'),
          [
            { text: 'OK', onPress: () => {} },
          ]
        )
        break
      }
      default:{
        Alert.alert(
          I18n.t('SignUp.failTitle'),
          I18n.t('SignUp.failTextDefault'),
          [
            { text: 'OK', onPress: () => {} },
          ]
        )
      }
    }
    }
  }

  login = async () => {
    this.props.dispatch(GoToLogin)
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <Loading visible={this.props.loading} />
        <BackgroundImage bgUrl={require('../../assets/image/background.jpg')}>
          <View style={loginStyles.container}>
            <Image
              source={require('../../assets/Logo.png')}
              style={loginStyles.logo}
            />
            <Input
              placeholder={I18n.t('SignUp.username')}
              icon={require('../../assets/icon/UserIcon.png')}
              onChangeText={text => this.setState({ username: text })}
              keyboardType="numeric"
              maxLength={11}
            />
            <Input
              placeholder={I18n.t('SignUp.email')}
              icon={require('../../assets/icon/email.png')}
              onChangeText={text => this.setState({ email: text })}
            />
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
              inlineStyle={loginStyles.loginButton}

            />
            <View style={{ flexDirection: 'row' }}>
              <View style={loginStyles.otherView}>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.forgetPassword}>
                  <Text style={{ color: 'white' }}>{I18n.t('SignUp.findPassword')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.login}>
                  <Text style={{ color: 'white' }}>{I18n.t('SignUp.login')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BackgroundImage>
      </View>
    )
  }
}


const loginStyles = StyleSheet.create({
  loginButton: {
    marginTop: 15,
    marginBottom: 15,
    padding: 15,
  },
  // disabled: {
  //   marginTop: 15,
  //   marginBottom: 15,
  //   padding: 15,
  //   backgroundColor: '#bcbcbc'
  // },
  otherButton: {
    backgroundColor: 'transparent',
  },
  otherView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 60
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
  }
})
