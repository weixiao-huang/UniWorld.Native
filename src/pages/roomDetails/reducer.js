import * as types from '@/types'
import {
  SET_ROOM_DETAILS,
  CLEAR_ROOM_DETAILS,
} from './types'

const initialState = {
  roomDetails: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: action.roomDetails,
      }
    case CLEAR_ROOM_DETAILS:
      return initialState
    default:
      return state
  }
}
