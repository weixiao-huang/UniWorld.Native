import * as types from '@/types'
import {
  SET_ROOM_INFO,
  CLEAR_ROOM_INFO,
  SET_ROOM_INFO_JOINED,
  SET_ROOM_INFO_MARKED,
  SET_ROOM_INFO_DATA,
  FOLLOW_OR_UNFOLLOW_USER,
  FOLLOW_OR_UNFOLLOW_SUCCESS,
} from './types'

const initialState = {
  roomInfo: null,
  isJoined: false,
  isMarked: false,
  hostFollowed: false,
  followRequesting: false,
  participants: null,
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
    case types.CLEAR_DATA:
      return initialState
    case FOLLOW_OR_UNFOLLOW_USER:
      return {
        ...state,
        followRequesting: true,
      }
    case FOLLOW_OR_UNFOLLOW_SUCCESS:
      return {
        ...state,
        followRequesting: false,
      }
    default:
      return state
  }
}
