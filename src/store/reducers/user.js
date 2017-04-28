/**
 * Created by huangwx on 13/04/2017.
 */


import * as types from '../types'

const initialState = {
  userInfo: {},
  user: {},
  dislikes: [],
  messages: {},
  isEditing: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case types.SET_EDIT_STATUS:
      return {
        ...state,
        isEditing: action.isEditing
      }
    case types.GET_USER:
      return {
        ...state,
        user: action.user
      }
    case types.SET_USER_DISLIKES:
      return {
        ...state,
        dislikes: action.dislikes
      }
    case types.EDIT_USER_INFO:
      console.log('EDIT_USER_INFO: ', action.userInfo)
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.userInfo
        }
      }
    case types.SEND_MESSAGE:
      let message = {}
      console.log('继续测试：', action.roomId, action.message)
      if (state.messages.hasOwnProperty(action.roomId)) {
        message[action.roomId] = state.messages[action.roomId].concat([action.message])
      } else {
        message[action.roomId] = [action.message]
      }
      // message[action.roomId] = [action.message].concat(state.messages[action.roomId])
      console.log('再测试：', message)
      return {
        ...state,
        messages: {
          ...state.messages,
          ...message
        }
      }
    case types.SET_ROOM_MESSAGES:
      let messages = {}
      for (let roomId in action.messages) {
        if (state.messages.hasOwnProperty(roomId)) {
          // messages[roomId] = action.messages[roomId].reverse().concat(state.messages[roomId])
          messages[roomId] = state.messages[roomId].concat(action.messages[roomId])
        } else {
          messages[roomId] = action.messages[roomId]
          // messages[roomId] = action.messages[roomId].reverse()
        }
      }
      return {
        ...state,
        messages: {
          ...state.messages,
          ...messages
        }
      }
    case types.USER_LOGOUT:
      return initialState
    default:
      return state
  }
}
