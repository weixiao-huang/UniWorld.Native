/**
 * Created by huangwx on 13/04/2017.
 */


import * as types from './types'
import api from '../api'
import { actionHandle, composeHandle, statusCodeHandle, tokenRequestHandle } from './utils'

export const Visit = dispatch => dispatch({type: types.USER_LOGIN, token: null})

export const UserLogout = dispatch => dispatch({type: types.USER_LOGOUT})

export const UserLogin = opt => async dispatch => (
  actionHandle(async () => (
    statusCodeHandle(await api.userLogin(opt))
    (data => dispatch({type: types.USER_LOGIN, token: data.token}))
  ))
)

export const GetUserInfo = async (dispatch, getState) => (
  composeHandle(api.getUserInfo)(types.GET_USER_INFO, 'userInfo')(dispatch, getState)
)

export const GetLatestRoomList = (dispatch, getState) => (
  composeHandle(api.getLatest)(types.GET_LATEST_ROOM_LIST, 'latest')(dispatch, getState)
)

export const GetRecommendRoomList = (dispatch, getState) => (
  composeHandle(api.getRecommend)(types.GET_RECOMMEND_ROOM_LIST, 'recommend')(dispatch, getState)
)

export const GetWorldRoomList = (dispatch, getState) => (
  composeHandle(api.getWorld)(types.GET_WORLD_ROOM_LIST, 'world')(dispatch, getState)
)

export const GetInitialLabels = async (dispatch, getState) => (
  composeHandle(api.getInitialLabels)(types.GET_INITIAL_LABELS, 'labels')(dispatch, getState)
)

export const AddLabel = label => dispatch => (
  dispatch({type: types.ADD_LABEL, label})
)

export const RemoveLabel = index => dispatch => (
  dispatch({type: types.REMOVE_LABEL, index})
)

export const SetNewRoomData = (name, data) => dispatch => (
  dispatch({type: types.SET_NEW_ROOM_DATA, name, data})
)

export const GoToRoomInfo = id => dispatch => (
  dispatch({type: types.GO_TO_ROOM_INFO, id})
)

export const GetRoomInfo = id => (dispatch, getState) => (
  composeHandle(api.getRoomInfo(id))(types.GET_ROOM_INFO, 'roomInfo')(dispatch, getState)
)

export const GoToRoomDetail = id => dispatch => (
  dispatch({type: types.GO_TO_ROOM_DETAIL, id})
)

export const GoToUser = id => dispatch => (
  dispatch({type: types.GO_TO_USER, id})
)

export const GetUser = id => (dispatch, getState) => {
  composeHandle(api.getUser(id))(types.GET_USER, 'user')(dispatch, getState)
}

export const GetRoomList = (dispatch, getState) => {
  composeHandle(api.getRoomList)(types.GET_ROOM_LIST, 'roomList')(dispatch, getState)
}
