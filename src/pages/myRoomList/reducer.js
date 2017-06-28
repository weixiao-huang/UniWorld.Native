import * as types from '@/types'

import {
  SET_MY_ROOM_LIST,
  SET_MY_ROOM_LIST_REFRESHING,
} from './types'

const initialState = {
  roomList: null,
  refreshing: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_ROOM_LIST:
      return {
        ...state,
        roomList: action.roomList,
      }
    case SET_MY_ROOM_LIST_REFRESHING:
      return {
        ...state,
        refreshing: action.refreshing,
      }
    case types.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
