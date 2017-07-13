import * as types from '../../types'
import {
  SET_ROOM_DETAILS,
  CLEAR_ROOM_DETAILS,
  FETCH_PARTICIPANTS,
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
    case FETCH_PARTICIPANTS: {
      const roomDetails = state.roomDetails
      roomDetails.participants = action.participants
      return {
        ...state,
        roomDetails,
      }
    }
    case CLEAR_ROOM_DETAILS:
    case types.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
