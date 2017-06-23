import { Map } from 'immutable'
import * as types from '@/types'

import {
  SET_MY_ROOM_LIST,
} from './types'

const initialState = Map({
  roomList: null,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_ROOM_LIST:
      return state.set('roomList', action.roomList)
    case types.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
