/**
 * Created by huangwx on 13/04/2017.
 */

import { Alert } from 'react-native'
import I18n from 'react-native-i18n'

import * as types from './types'
import api from '../api'

export const Visit = dispatch => {
  dispatch({type: types.USER_LOGIN, token: null})
}

export const UserLogout = dispatch => {
  dispatch({type: types.USER_LOGOUT})
}

export const UserLogin = opt => async dispatch => {
  try {
    const res = await api.userLogin(opt)
    if (res.status === 200) {
      const data = await res.json()
      dispatch({ type: types.USER_LOGIN, token: data.token })
    } else throw { message: I18n.t('Actions.loginError') }
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
    dispatch({type: types.USER_LOGIN_ERROR, error: err})
  }
}

export const GetUserInfo = async (dispatch, getState) => {
  try {
    const res = await api.getUserInfo(getState().auth.token)
    if (res.status === 200) {
      const data = await res.json()
      dispatch({ type: types.GET_USER_INFO, userInfo: data })
    } else throw { message: I18n.t('Actions.statusError') }
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
    dispatch({type: types.USER_LOGIN_ERROR, error: err})
  }
}
