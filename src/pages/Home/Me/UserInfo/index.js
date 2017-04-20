/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import styles from '../../../../common/styles'

import LoginButton from '../../../../components/StyleButton'
import LabelBox from './TextBox'

import { UserLogout, GoToLogin } from '../../../../store/actions'

@connect(state=> ({userInfo: state.user.userInfo}))
export default class UserInfo extends Component {
  edit () {

  }

  logout = () => {
    this.props.dispatch(GoToLogin)
    this.props.dispatch(UserLogout)
  }

  render () {
    const { username, name, gender, university, department, year, signature } = this.props.userInfo
    const infos = [
      [
        { title: I18n.t('Me.info.phone'), content: username },
        { title: I18n.t('Me.info.name'), content: name },
        { title: I18n.t('Me.info.gender'), content: gender === true ? '男' : gender === false ? '女' : '无'},
      ],
      [
        { title: I18n.t('Me.info.school'), content: university.name_ch },
        { title: I18n.t('Me.info.department'), content: department },
        { title: I18n.t('Me.info.grade'), content: year },
      ],
      [
        { title: I18n.t('Me.info.nickname'), content: username },
        { title: I18n.t('Me.info.signature'), content: signature },
      ]
    ]
    return (
      <ScrollView style={[styles.flex1, userStyles.container]}>
        <View style={[styles.flex4]}>
          {infos.map((labels, index) => {
            return (
              <View style={[{flex: labels.length}]} key={index}>
                <LabelBox labels={labels}/>
              </View>
            )
          })}
        </View>
        <View style={[styles.flex1, userStyles.buttonBox]}>
          <LoginButton
            title={I18n.t('Me.info.edit')}
            onPress={this.edit}
            inlineStyle={[userStyles.edit, userStyles.button]}
            color="black"
          />
          <LoginButton
            title={I18n.t('Me.info.logout')}
            onPress={this.logout}
            inlineStyle={[userStyles.logout, userStyles.button]}
            color="black"
          />
        </View>
      </ScrollView>
    )
  }
}

const buttonHeight = 40
const buttonRadius = 3
const userStyles = StyleSheet.create({
  container: {
    backgroundColor: '#eee'
  },
  buttonBox: {
    justifyContent: 'flex-end'
  },
  button: {
    height: buttonHeight,
    borderRadius: buttonRadius,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  edit: {
    backgroundColor: 'white',
  },
  logout: {
    backgroundColor: '#eee'
  }
})
