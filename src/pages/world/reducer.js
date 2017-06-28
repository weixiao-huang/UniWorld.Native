import * as types from '@/types'
import {
  SET_WORLD_DATA,
  SET_WORLD_REFRESHING,
} from './types'

const initialState = {
  world: null,
  recommend: null,
  latest: null,
  posters: null,
  refreshing: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WORLD_DATA:
      return {
        ...state,
        ...action.data,
      }
    case SET_WORLD_REFRESHING:
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
