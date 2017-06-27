import * as types from '@/types'
import {
  SET_ROOM_INFO,
  CLEAR_ROOM_INFO,
  SET_ROOM_INFO_JOINED,
  SET_ROOM_INFO_MARKED,
  SET_ROOM_INFO_DATA,
} from './types'

const initialState = {
  roomInfo: null,
  isJoined: false,
  isMarked: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOM_INFO:
      return {
        ...state,
        roomInfo: action.roomInfo,
      }
    case SET_ROOM_INFO_JOINED:
      return {
        ...state,
        isJoined: action.isJoined,
      }
    case SET_ROOM_INFO_MARKED:
      return {
        ...state,
        isMarked: action.isMarked,
      }
    case SET_ROOM_INFO_DATA:
      return {
        ...state,
        ...action.data,
      }
    case CLEAR_ROOM_INFO:
      return initialState
    default:
      return state
  }
}
