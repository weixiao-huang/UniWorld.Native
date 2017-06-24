import React from 'react'

import Button from '@/components/Button'
import {
  LOGOUT_REQUEST,
} from '@/pages/login/types'

import {
  MainView,
  MainText,
} from './style'

import Info from './Info'

const UserInfo = ({ logoutAction, dispatch, userInfo }) => {
  const logout = () => {
    dispatch({ type: LOGOUT_REQUEST })
  }
  console.log(this.props)
  return (
    <MainView>
      <Info user={userInfo} />
      <Button
        title="logout"
        onPress={logout}
        color="black"
      />
    </MainView>
  )
}

export default UserInfo
