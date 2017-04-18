/**
 * Created by huangwx on 13/04/2017.
 */


import * as types from '../types'

const initialState = {
  userInfo: {},
  user: {}
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
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
    default:
      return state
  }
}
