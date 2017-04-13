/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../common/styles'

import LoginButton from '../../../components/StyleButton'
import LabelBox from './TextBox'
import autobind from 'autobind-decorator'

import { UserLogout } from '../../../store/actions'

const infos = [
  [
    { title: '手机', content: 'uniworld' },
    { title: '名称', content: '' },
    { title: '性别', content: '女' },
  ],
  [
    { title: '学校', content: '清华大学' },
    { title: '院系', content: 'EE' },
    { title: '年级', content: '2013' },
  ],
  [
    { title: '昵称', content: 'asd' },
    { title: '签名', content: '123' },
  ]
]

@connect(...[, dispatch => ({dispatch})])
export default class UserInfo extends Component {
  edit () {

  }

  @autobind
  logout () {
    this.props.dispatch(UserLogout)
  }
  render () {
    return (
      <View style={[styles.flex1, userStyles.container]}>
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
      </View>
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
  },
  edit: {
    backgroundColor: 'white',
  },
  logout: {
    backgroundColor: '#eee'
  }
})
