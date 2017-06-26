import * as types from '@/types'
import {
  SET_ROOM_INFO,
  CLEAR_ROOM_INFO,
  SET_ROOM_INFO_FOLLOW,
} from './types'

const initialState = {
  roomInfo: null,
  isFollowed: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOM_INFO:
      return {
        ...state,
        roomInfo: action.roomInfo,
      }
    case SET_ROOM_INFO_FOLLOW:
      return {
        ...state,
        isFollowed: action.isFollowed,
      }
    case CLEAR_ROOM_INFO:
      return initialState
    default:
      return state
  }
}
