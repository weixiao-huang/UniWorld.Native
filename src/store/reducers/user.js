/**
 * Created by huangwx on 13/04/2017.
 */


import * as types from '../types'

const initialState = {
  userInfo: {}
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    default:
      return state
  }
}
