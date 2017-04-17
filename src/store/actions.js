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

export const GetWorldList = async (dispatch, getState) => {
  try {
    const token = getState().auth.token
    const recommendRes = await api.getRecommend(token)
    const latestRes = await api.getLatest(token)
    const worldRes = await api.getWorld(token)
    console.log(recommendRes.status)
    console.log(latestRes.status)
    console.log(worldRes.status)
    if (recommendRes.status === 200 &&
      latestRes.status === 200 &&
      worldRes.status === 200) {
      const recommend = await recommendRes.json()
      const latest = await latestRes.json()
      const world = await worldRes.json()
      dispatch({type: types.GET_WORLD_LIST, recommend: recommend, latest: latest, world: world})
    } else throw { message: 'Get WorldList Status code Error' }
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
