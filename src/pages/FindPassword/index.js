/**
 * Created by huangwx on 10/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import {
  Visit, UserLogin, GoToLogin
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
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
    }
  }

  login = async () => {
    this.props.dispatch(GoToLogin)
  }

  visit = async () => {
    this.props.dispatch(Visit)
  }

  findPassword = async () => {

    if (this.state.username.length == 11 && this.state.email.length > 5) {
      const res = await api.findPassword(this.state)
      switch (res.status) {
        case 200: {
          Alert.alert(
            I18n.t('FindPassword.succeedTitle'),
            I18n.t('FindPassword.succeedText'),
            [
              { text: 'OK', onPress: () => { this.props.dispatch(GoToLogin) } },
            ]
          )
          break;
        }
        default: {
          Alert.alert(
            I18n.t('FindPassword.fail'),
            I18n.t('FindPassword.failReason'),
            [
              { text: 'OK', onPress: () => { } },
            ]
          )
          break;
        }
      }
    }
    else{
      Alert.alert(
            I18n.t('tips'),
            I18n.t('FindPassword.fillInfo'),
            [
              { text: 'OK', onPress: () => { } },
            ]
          )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Loading visible={this.props.loading} />
        <BackgroundImage bgUrl={require('../../assets/image/background.jpg')}>
          <View style={loginStyles.container}>
            <Image
              source={require('../../assets/image/Logo.png')}
              style={loginStyles.logo}
            />
            <Input
              placeholder={I18n.t('Login.username')}
              icon={require('../../assets/icon/UserIcon.png')}
              onChangeText={text => this.setState({ username: text })}
              keyboardType="numeric"
            />
            <Input
              placeholder={I18n.t('SignUp.email')}
              icon={require('../../assets/icon/email.png')}
              onChangeText={text => this.setState({ email: text })}

            />
            <LoginButton
              title={I18n.t('SignUp.findpassword')}
              onPress={this.findPassword}
              inlineStyle={loginStyles.loginButton}
            />
            <View style={{ flexDirection: 'row' }}>
              <View style={loginStyles.otherView}>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.visit}>
                  <Text style={{ color: 'white' }}>{I18n.t('SignUp.visitor')}</Text>
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
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
  },
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
