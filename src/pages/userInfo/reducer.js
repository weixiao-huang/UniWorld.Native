import * as types from '@/types'
import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
} from './types'

const initialState = {
  userInfo: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      }
    case CLEAR_USER_INFO:
      return initialState
    default:
      return state
  }
}
