import { Map } from 'immutable'
import * as types from '@/types'
import {
  SET_MY_USER_INFO,
} from './types'

const initialState = Map({
  userInfo: null,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_USER_INFO:
      return state.set('userInfo', action.userInfo)
    case types.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
