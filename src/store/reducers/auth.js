/**
 * Created by huangwx on 12/04/2017.
 */

import * as types from '../types'

const initialState = {
  isLoggedIn: false,
  token: {},
  status: null
}

export default auth = (state=initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_DOING:
      return {
        ...state,
        status: 'doing'
      }
    case types.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
        status: 'done'
      }
    case types.USER_LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: {},
        status: null
      }
    case types.USER_LOGOUT:
      return initialState
    default:
      return state
  }
}
