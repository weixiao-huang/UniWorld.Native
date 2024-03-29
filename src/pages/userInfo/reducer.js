import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  SET_FOLLOWED,
  FOLLOW_OR_UNFOLLOW_USER,
  FOLLOW_OR_UNFOLLOW_SUCCESS,
} from './types'

const initialState = {
  userInfo: null,
  isFollowed: false,
  requesting: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      }
    case SET_FOLLOWED:
      return {
        ...state,
        isFollowed: action.isFollowed,
      }
    case CLEAR_USER_INFO:
      return initialState
    case FOLLOW_OR_UNFOLLOW_USER:
      return {
        ...state,
        requesting: true,
      }
    case FOLLOW_OR_UNFOLLOW_SUCCESS:
      return {
        ...state,
        requesting: false,
      }
    default:
      return state
  }
}
