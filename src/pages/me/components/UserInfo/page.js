import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import I18n from '@/locales'

import {
  LOGOUT_REQUEST,
} from '@/pages/login/types'

import EmptyView from '@/components/EmptyView'

import {
  MainScrollView,
  StyledEditButton,
  StyledLogoutButton,
} from './style'

import Info from './Info'

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
})

const UserInfo = ({ logoutAction, dispatch, userInfo }) => {
  const logout = () => {
    Alert.alert(
      I18n.t('Me.info.Logout.title'),
      I18n.t('Me.info.Logout.content'),
      [
        {
          text: I18n.t('confirm'),
          onPress: () => dispatch({ type: LOGOUT_REQUEST }),
        },
        {
          text: I18n.t('cancel'),
          onPress: () => {},
        },
      ],
    )
  }

  const edit = () => {}

  console.log(this.props)
  return (
    <MainScrollView>
      <Info user={userInfo} />
      <EmptyView />
      <StyledEditButton
        title="Edit"
        onPress={edit}
        textStyle={styles.text}
      />
      <StyledLogoutButton
        title="Logout"
        onPress={logout}
        textStyle={styles.text}
      />
      <EmptyView />
    </MainScrollView>
  )
}

export default UserInfo
