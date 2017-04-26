/**
 * Created by huangwx on 13/04/2017.
 */


import * as types from '../types'

const initialState = {
  userInfo: {},
  user: {},
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
    case types.USER_LOGOUT:
      return {
        ...state,
        userInfo: {},
        user: {}
      }
    case types.SET_ROOM_MESSAGES:
      let messages = {}
      for (let roomId in action.messages) {
        if (state.messages.hasOwnProperty(roomId)) {
          messages[roomId] = state.messages[roomId].concat(action.messages[roomId])
        } else {
          messages[roomId] = action.messages[roomId]
        }
      }
      return {
        ...state,
        messages: {
          ...state.messages,
          ...messages
        }
      }
    default:
      return state
  }
}
