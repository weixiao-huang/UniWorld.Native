import * as types from '@/types'
import {
  SET_ROOM_INFO,
  CLEAR_ROOM_INFO,
} from './types'

const initialState = {
  roomInfo: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOM_INFO:
      return {
        ...state,
        roomInfo: action.roomInfo,
      }
    case CLEAR_ROOM_INFO:
      return initialState
    default:
      return state
  }
}
