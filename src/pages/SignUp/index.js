/**
 * Created by huangwx on 10/04/2017.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal, Platform } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import {
  Visit, UserLogin, FetchRoomList, FetchWorldRoomList, FetchRecommendRoomList,
  FetchLatestRoomList, GoToHome, FetchUserInfo, SetCommonData, FetchInitialLabels
} from '../../store/actions'

import Input from '../Login/Input'
import LoginButton from '../../components/StyleButton'
import BackgroundImage from '../../components/BackgroundImage'

import Loading from '../../components/Loading'

const mapStateToProps = state => ({
  loading: state.common.loading
})

@connect(mapStateToProps, dispatch=>({dispatch}))
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email:'',
      passwordCheck:''
    }
  }

  visit = async () => {
    // this.props.dispatch(Visit)
  }

  signup = async () => {
  }

  login = async () => {
     this.props.dispatch(GoToLogin)
  }

  

  render () {
    return (
      <View style={{flex: 1}}>
        <Loading visible={this.props.loading}/>
        <BackgroundImage bgUrl={require('../../assets/image/background.jpg')}>
          <View style={loginStyles.container}>
            <Image
              source={require('../../assets/Logo.png')}
              style={loginStyles.logo}
            />
            <Input
              placeholder={I18n.t('SignUp.username')}
              icon={require('../../assets/icon/UserIcon.png')}
              onChangeText={text => this.setState({username: text})}
              keyboardType="numeric"
            />
            <Input
              placeholder={I18n.t('SignUp.email')}
              icon={require('../../assets/icon/email.png')}
              onChangeText={text => this.setState({password: text})}
            />
            <Input
              placeholder={I18n.t('SignUp.password')}
              icon={require('../../assets/icon/PasswordIcon.png')}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry={true}
            />
            <Input
              placeholder={I18n.t('SignUp.passwordAgain')}
              icon={require('../../assets/icon/PasswordIcon.png')}
              onChangeText={text => this.setState({passwordCheck: text})}
              secureTextEntry={true}
            />
            <LoginButton
              title={I18n.t('SignUp.signUp')}
              onPress={this.signUp}
              inlineStyle={loginStyles.loginButton}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={loginStyles.otherView}>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.visit}>
                  <Text style={{color: 'white'}}>{I18n.t('SignUp.findPassword')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyles.otherButton} onPress={this.login}>
                  <Text style={{color: 'white'}}>{I18n.t('SignUp.login')}</Text>
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