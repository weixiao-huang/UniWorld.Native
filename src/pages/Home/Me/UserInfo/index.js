/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'

import LoginButton from '../../../../components/StyleButton'
import LabelBox from './TextBox'
import autobind from 'autobind-decorator'

import { UserLogout, GetUserInfo } from '../../../../store/actions'

@connect(state=> ({userInfo: state.user.userInfo}), dispatch => ({dispatch}))
export default class UserInfo extends Component {
  componentWillMount() {
    this.props.dispatch(GetUserInfo)
  }
  edit () {

  }

  @autobind
  logout () {
    this.props.dispatch(UserLogout)
  }
  render () {
    const { username, name, gender, university, department, year, signature } = this.props.userInfo
    const infos = [
      [
        { title: '手机', content: username },
        { title: '名称', content: name },
        { title: '性别', content: gender === true ? '男' : gender === false ? '女' : '无'},
      ],
      [
        { title: '学校', content: university.name_ch },
        { title: '院系', content: department },
        { title: '年级', content: year },
      ],
      [
        { title: '昵称', content: username },
        { title: '签名', content: signature },
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
            title="编辑"
            onPress={this.edit}
            inlineStyle={[userStyles.edit, userStyles.button]}
            color="black"
          />
          <LoginButton
            title="退出登录"
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
