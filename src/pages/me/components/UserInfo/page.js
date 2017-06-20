import React from 'react'

import Button from '@/components/Button'
import {
  LOGOUT_REQUEST,
} from '@/pages/login/types'

import {
  MainView,
  MainText,
} from './style'

const UserInfo = ({ logoutAction, dispatch }) => {
  const logout = () => {
    dispatch({ type: LOGOUT_REQUEST })
  }
  return (
    <MainView>
      <MainText>UserInfo</MainText>
      <Button
        title="logout"
        onPress={logout}
        color="black"
      />
    </MainView>
  )
}

export default UserInfo
