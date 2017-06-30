import * as types from '@/types'
import {
  SET_MY_USER_INFO,
} from './types'

const initialState = {
  userInfo: null,
  followIds: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_USER_INFO: {
      const followDict = {}
      action.userInfo.follows.map((item) => {
        followDict[item.id] = item
        return item
      })
      return {
        ...state,
        userInfo: action.userInfo,
        followIds: action.userInfo.follows.map(item => item.id),
        followDict,
      }
    }
    case types.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
