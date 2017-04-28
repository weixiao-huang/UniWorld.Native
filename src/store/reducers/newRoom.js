/**
 * Created by huangwx on 16/04/2017.
 */

/**
 * Created by huangwx on 14/04/2017.
 */

import * as types from '../types'

const initialState = {
  id: '',
  title: '',
  labels: [],
  is_matchroom: false,
  cover: '',
  intro: '',
  date_time_start: '',
  date_time_end: '',
  location_string: '',
  max_participants: '',
  isPrivate: false,
  welcome: '',
  expense: '',
  rewards: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_LABEL:
      if (state.labels.indexOf(action.label) >= 0) return state
      return {
        ...state,
        labels: state.labels.concat(action.label)
      }
    case types.REMOVE_LABEL:
      if (action.index < 0) return state
      state.labels.splice(action.index, 1)
      return {
        ...state,
      }
    case types.SET_NEW_ROOM_DATA:
      return {
        ...state,
        ...(action.data)
      }
    case types.SET_NEW_ROOM_ID:
      return {
        ...state,
        id: action.id
      }
    case types.USER_LOGOUT:
      return initialState
    default:
      return state
  }
}
