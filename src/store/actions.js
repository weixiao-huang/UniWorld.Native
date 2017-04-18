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
    } else throw { message: 'Get Room List Status Code Error!' }
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
    dispatch({type: types.USER_LOGIN_ERROR, error: err})
  }
}

export const GetLatestRoomList = async (dispatch, getState) => {
  try {
    const token = getState().auth.token
    const res = await api.getLatest(token)
    if (res.status === 200) {
      const data = await res.json()
      return dispatch({type: types.GET_LATEST_ROOM_LIST, latest: data})
    } else throw { message: 'Get Latest Status code Error' }
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}

export const GetRecommendRoomList = async (dispatch, getState) => {
  try {
    const token = getState().auth.token
    const res = await api.getLatest(token)
    if (res.status === 200) {
      const data = await res.json()
      return dispatch({type: types.GET_RECOMMEND_ROOM_LIST, recommend: data})
    } else throw { message: 'Get Latest Status code Error' }
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}

export const GetWorldRoomList = async (dispatch, getState) => {
  try {
    const token = getState().auth.token
    const res = await api.getLatest(token)
    if (res.status === 200) {
      const data = await res.json()
      return dispatch({type: types.GET_WORLD_ROOM_LIST, world: data})
    } else throw { message: 'Get Latest Status code Error' }
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}

export const GetInitialLabels = async (dispatch, getState) => {
  try {
    const token = getState().auth.token
    const res = await api.getInitialLabels(token)
    if (res.status === 200) {
      const labels = await res.json()
      dispatch({type: types.GET_INITIAL_LABELS, labels})
    } else throw { message: 'Get initial labels Status Code Error!'}
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}

export const AddLabel = label => dispatch => {
  dispatch({type: types.ADD_LABEL, label})
}

export const RemoveLabel = index => dispatch => {
  dispatch({type: types.REMOVE_LABEL, index})
}

export const SetNewRoomData = (name, data) => dispatch => {
  dispatch({type: types.SET_NEW_ROOM_DATA, name, data})
}

export const GoToRoomInfo = id => dispatch => {
  dispatch({type: types.GO_TO_ROOM_INFO, id})
}

export const GetRoomInfo = id => async (dispatch, getState) => {
  try {
    const token = getState().auth.token
    const res = await api.getRoomInfo(id)(token)
    if (res.status === 200) {
      const roomInfo = await res.json()
      dispatch({type: types.GET_ROOM_INFO, roomInfo})
    } else throw { message: 'Get Room Info Status Code Error!'}
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}

export const GoToRoomDetail = id => dispatch => {
  dispatch({type: types.GO_TO_ROOM_DETAIL, id})
}

export const GoToUser = id => dispatch => {
  dispatch({type: types.GO_TO_USER, id})
}

export const GetUser = id => async (dispatch, getState) => {
  try {
    const token = getState().auth.token
    const res = await api.getUser(id)(token)
    if (res.status === 200) {
      const user = await res.json()
      dispatch({type: types.GET_USER, user})
    } else throw { message: 'Get User Status Code Error!'}
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}

export const GetRoomList = async(dispatch, getState) => {
  try {
    const token = getState().auth.token
    const res = await api.getRoomList(token)
    if (res.status === 200) {
      const roomList = await res.json()
      dispatch({type: types.GET_ROOM_LIST, roomList})
    } else throw { message: 'Get Room List Status Code Error!'}
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}
