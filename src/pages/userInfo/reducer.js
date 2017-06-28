import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  SET_FOLLOWED,
} from './types'

const initialState = {
  userInfo: null,
  isFollowed: false,
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
    default:
      return state
  }
}
