/**
 * Created by huangwx on 13/04/2017.
 */


import * as types from './types'
import api from '../api'
import { Alert } from 'react-native'
import { actionHandle, composeHandle, statusCodeHandle, tokenRequestHandle } from './utils'

export const GoToHome = dispatch => dispatch({type: types.GO_TO_HOME})
export const GoToLogin = dispatch => dispatch({type: types.GO_TO_LOGIN})
export const GoToForgetPassword = dispatch => dispatch({type: types.GO_TO_FORGETPASSWORD})
export const GoToSignInfo = dispatch => dispatch({type: types.GO_TO_SIGNINFO})

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


export const EditUserInfo = data => (dispatch, getState) => (
  composeHandle(api.editUserInfo(data))(types.EDIT_USER_INFO, 'userInfo')(dispatch, getState)
)

export const FetchUserInfo = (dispatch, getState) => (
  composeHandle(api.fetchUserInfo)(types.GET_USER_INFO, 'userInfo')(dispatch, getState)
)

export const FetchLatestRoomList = (dispatch, getState) => (
  composeHandle(api.fetchLatest)(types.GET_LATEST_ROOM_LIST, 'latest')(dispatch, getState)
)

export const FetchChannels = (dispatch, getState) => (
  composeHandle(api.fetchChannels)(types.GET_CHANNELS, 'channels')(dispatch, getState)
)

export const FetchUnreadRooms = (dispatch, getState) => (
  composeHandle(api.fetchUnreadRooms(id))(types.GET_UNREADROOMS, 'unreadRooms')(dispatch, getState)
)

export const FetchRecommendRoomList = (dispatch, getState) => (
  composeHandle(api.fetchRecommend)(types.GET_RECOMMEND_ROOM_LIST, 'recommend')(dispatch, getState)
)

export const FetchWorldRoomList = (dispatch, getState) => (
  composeHandle(api.fetchWorld)(types.GET_WORLD_ROOM_LIST, 'world')(dispatch, getState)
)

export const FetchTopRoomList = (dispatch, getState) => (
  composeHandle(api.fetchTop)(types.GET_TOP_ROOM_LIST, 'top')(dispatch, getState)
)

export const FetchPosters = (dispatch, getState) => (
  composeHandle(api.fetchPosters)(types.GET_POSTERS, 'posters')(dispatch, getState)
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

export const SetUserInfo = data => dispatch => (
  dispatch({type: types.EDIT_USER_INFO, userInfo: data})
)

export const SetUnreadZero = roomId => dispatch => (
  dispatch({type: types.SET_UNREAD_ZERO, id: roomId})
)

export const SetNewRoomData = data => dispatch => (
  dispatch({type: types.SET_NEW_ROOM_DATA, data})
)

export const ResetNewRoomData = dispatch => (
  dispatch({type: types.RESET_NEW_ROOM_DATA})
)

export const SetLoginDialog = loginDialog => dispatch => (
  dispatch({type: types.SET_LOGIN_DIALOG, loginDialog})
)

export const GoToRoomInfo = id => dispatch => (
  dispatch({type: types.GO_TO_ROOM_INFO, id})
)

export const GoToChannel = id => dispatch => (
  dispatch({type: types.GO_TO_CHANNEL, id})
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

export const GoToSignUp = dispatch => (
  dispatch({type: types.SIGN_UP})
)

export const SetEditStatus = isEditing => dispatch => (
  dispatch({type: types.SET_EDIT_STATUS, isEditing})
)

export const SetLoading = loading => dispatch => (
  dispatch({type: types.SET_LOADING, loading})
)

export const SetCommonData = (name, data) => dispatch => (
  dispatch({type: types.SET_COMMON_DATA, data: {[name]: data}})
)

export const FetchDislikes = userId => (dispatch, getState) => (
  composeHandle(api.fetchDislikes(userId))(types.SET_USER_DISLIKES, 'dislikes')(dispatch, getState)
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

export const CreateRoom = data => (dispatch, getState) => (
  composeHandle(api.createRoom(data), 201)(types.SET_NEW_ROOM_ID, 'id')(dispatch, getState)
)

export const MessagePolling = (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.messagePolling)(getState).then(async res => {
      if (res.status !== 200) throw { message: res }
      try {
        const data = await res.json()
        console.log('成功接收到消息: ', Object.values(data.messages)[0][0])
        return dispatch({type: types.SET_ROOM_MESSAGES, messages: data.messages})
      } catch (err) {
      }
    })
  ))
)

export const SetRoomMessage = (message) => (dispatch, getState) => {
  console.log(message,'iiii')
  return dispatch({type: types.SET_ROOM_MESSAGE, message})
}

export const CheckMailbox  = (pmid) => (dispatch, getState) => {
  //composeHandle(api.checkMailbox(pmid))(types.CHECK_MAILBOX, 'data')(dispatch, getState)
  console.log('?????')
  return actionHandle(() => (
    tokenRequestHandle(api.checkMailbox(pmid))(getState))
  )
}

export const UploadCover = data => roomId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.uploadCover(data)(roomId))(getState).then(res => {
      if (res.status !== 200) throw { message: res }

    })
  ))
)

export const MarkRoom = roomId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.markRoom(roomId))(getState).then(res => {
      if (res.status !== 200) throw { message: 'Status Code Error' }
    })
  ))
)

export const SendMessage = data => roomId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.sendMessage(data)(roomId))(getState).then(res =>
      statusCodeHandle(res, 201)(data => dispatch({type: types.SEND_MESSAGE, message: data, roomId}))
    ).catch(err => {throw err})
  ))
)

export const SendAnnouncement = data => roomId => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(api.sendAnnouncement(data)(roomId))(getState).then(res =>
      {
        console.log(res)
        return statusCodeHandle(res, 201)(data => dispatch({type: types.SEND_ANNOUNCEMENT, message: data, roomId}))
      }).catch(err => {throw err})
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


