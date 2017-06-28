import React, { Component } from 'react'
import { StyleSheet, Alert, KeyboardAvoidingView } from 'react-native'
import I18n from '@/locales'

import EmptyView from '@/components/EmptyView'

import {
  MainScrollView,
  StyledButton,
  StyledLogoutButton,
} from './style'

import Info from './Info'

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
})

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      gender: '',
      department: this.props.userInfo.department,
      year: '',
      name: this.props.userInfo.name,
      signature: this.props.userInfo.signature,
    }
  }
  logout = () => Alert.alert(
    I18n.t('Me.info.Logout.title'),
    I18n.t('Me.info.Logout.content'),
    [
      {
        text: I18n.t('confirm'),
        onPress: () => this.props.logoutAction(),
      },
      {
        text: I18n.t('cancel'),
        onPress: () => {},
      },
    ],
  )

  edit = () => this.setState({ isEditing: true })

  save = () => Alert.alert(
    I18n.t('Me.info.Edit.title'),
    I18n.t('Me.info.Edit.content'),
    [
      {
        text: I18n.t('confirm'),
        onPress: () => {
          const { name, gender, department, year, signature } = this.state
          const data = {
            name,
            department,
            signature,
            year: year || this.props.userInfo.year,
            gender: gender !== '' ? gender : this.props.userInfo.gender,
          }
          this.props.putAction(data)
          this.setState({
            isEditing: false,
            gender: '',
            department: this.props.userInfo.department,
            year: '',
            name: this.props.userInfo.name,
            signature: this.props.userInfo.signature,
          })
        },
      },
      {
        text: I18n.t('cancel'),
        onPress: () => {},
      },
    ],
  )

  cancel = () => {
    const {
      name, department, signature, year,
    } = this.props.userInfo
    this.setState({
      isEditing: false,
      name,
      department,
      year,
      signature,
      gender: '',
    })
  }

  render() {
    const { isEditing } = this.state
    return (
      <MainScrollView>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={50}
        >
          <Info
            setData={(name, value) => this.setState({ [name]: value })}
            user={this.props.userInfo}
            isEditing={isEditing}
            gender={this.state.gender}
            year={this.state.year}
          />
          <EmptyView />
          <StyledButton
            title={isEditing ? I18n.t('save') : I18n.t('Me.info.edit')}
            onPress={isEditing ? this.save : this.edit}
            textStyle={styles.text}
          />
          {isEditing && <StyledButton
            title={I18n.t('cancel')}
            onPress={this.cancel}
            textStyle={styles.text}
          />}
          <StyledLogoutButton
            title="Logout"
            onPress={this.logout}
            textStyle={styles.text}
          />
          <EmptyView />
        </KeyboardAvoidingView>
      </MainScrollView>
    )
  }
}
