import * as types from '@/types'
import {
  SET_WORLD_DATA,
} from './types'

const initialState = {
  world: null,
  recommend: null,
  latest: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WORLD_DATA:
      return {
        ...state,
        ...action.data,
      }
    case types.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
