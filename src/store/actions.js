/**
 * Created by huangwx on 13/04/2017.
 */


import * as types from './types'
import api from '../api'
import { actionHandle, composeHandle, statusCodeHandle, tokenRequestHandle } from './utils'

export const GoToHome = dispatch => dispatch({type: types.GO_TO_HOME})
export const GoToLogin = dispatch => dispatch({type: types.GO_TO_LOGIN})

export const Visit = dispatch => dispatch({type: types.USER_LOGIN, token: null})

export const UserLogout = dispatch => dispatch({type: types.USER_LOGOUT})

export const UserLogin = opt => dispatch => (
  actionHandle(() => (
    api.userLogin(opt).then(res => (
      statusCodeHandle(res)(data =>
        dispatch({type: types.USER_LOGIN, token: data.token})
      )
    ), err => {throw err})
  ))
)

export const FetchUserInfo = (dispatch, getState) => (
  composeHandle(api.fetchUserInfo)(types.GET_USER_INFO, 'userInfo')(dispatch, getState)
)

export const FetchLatestRoomList = (dispatch, getState) => (
  composeHandle(api.fetchLatest)(types.GET_LATEST_ROOM_LIST, 'latest')(dispatch, getState)
)

export const FetchRecommendRoomList = (dispatch, getState) => (
  composeHandle(api.fetchRecommend)(types.GET_RECOMMEND_ROOM_LIST, 'recommend')(dispatch, getState)
)

export const FetchWorldRoomList = (dispatch, getState) => (
  composeHandle(api.fetchWorld)(types.GET_WORLD_ROOM_LIST, 'world')(dispatch, getState)
)

export const FetchInitialLabels = (dispatch, getState) => (
  composeHandle(api.fetchInitialLabels)(types.GET_INITIAL_LABELS, 'labels')(dispatch, getState)
)

export const AddLabel = label => dispatch => (
  dispatch({type: types.ADD_LABEL, label})
)

export const RemoveLabel = index => dispatch => (
  dispatch({type: types.REMOVE_LABEL, index})
)

export const SetNewRoomData = data => dispatch => (
  dispatch({type: types.SET_NEW_ROOM_DATA, data})
)

export const GoToRoomInfo = id => dispatch => (
  dispatch({type: types.GO_TO_ROOM_INFO, id})
)

export const FetchRoomInfo = id => (dispatch, getState) => (
  composeHandle(api.fetchRoomInfo(id))(types.GET_ROOM_INFO, 'roomInfo')(dispatch, getState)
)

export const GoToRoomDetail = id => dispatch => (
  dispatch({type: types.GO_TO_ROOM_DETAIL, id})
)

export const GoToUser = id => dispatch => (
  dispatch({type: types.GO_TO_USER, id})
)

export const FetchUser = id => (dispatch, getState) => (
  composeHandle(api.fetchUser(id))(types.GET_USER, 'user')(dispatch, getState)
)

export const FetchRoomList = (dispatch, getState) => (
  composeHandle(api.fetchRoomList)(types.GET_ROOM_LIST, 'roomList')(dispatch, getState)
)

export const FetchQuestionnaires = id => (dispatch, getState) => (
  composeHandle(api.fetchQuestionnaires(id))(types.GET_QUESTIONNAIRES, 'questionnaires')(dispatch, getState)
)

export const MarkRoom = roomId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.markRoom(roomId))(getState).then(res => {
      if (res.status !== 200) throw { message: 'Status Code Error' }
    })
  ))
)

export const UnmarkRoom = roomId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.unmarkRoom(roomId))(getState).then(res => {
      if (res.status !== 200) throw { message: 'Status Code Error' }
    })
  ))
)

export const JoinRoom = roomId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.joinRoom(roomId))(getState).then(res => {
      if (res.status !== 200) throw { message: 'Status Code Error' }
    })
  ))
)

export const LeaveRoom = roomId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.leaveRoom(roomId))(getState).then(res => {
      if (res.status !== 200) throw { message: 'Status Code Error' }
    })
  ))
)

export const FollowUser = userId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.followUser(userId))(getState).then(res => {
      if (res.status !== 200) throw { message: 'Status Code Error' }
    })
  ))
)

export const UnfollowUser = userId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.unfollowUser(userId))(getState).then(res => {
      if (res.status !== 200) throw { message: 'Status Code Error' }
    })
  ))
)
