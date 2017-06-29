import * as types from '@/types'

import {
  ADD_LABEL,
  REMOVE_LABEL,
  SET_NEW_ROOM_DATA,
  SET_NEW_ROOM_ID,
  CLEAR_NEW_ROOM_DATA,
  SET_CREATING,
} from './types'

const initialState = {
  id: '',
  title: '',
  labels: [],
  is_matchroom: false,
  cover: '',
  description: '',
  date_time_start: '',
  date_time_end: '',
  location_string: '',
  max_participants: '',
  isPrivate: false,
  welcome: '',
  expense: '',
  rewards: '',
  creating: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL:
      if (state.labels.indexOf(action.label) >= 0) return state
      return {
        ...state,
        labels: state.labels.concat(action.label),
      }
    case REMOVE_LABEL:
      if (action.index < 0) return state
      state.labels.splice(action.index, 1)
      return {
        ...state,
      }
    case SET_NEW_ROOM_DATA:
      return {
        ...state,
        ...action.data,
      }
    case SET_CREATING:
      return {
        ...state,
        creating: action.creating,
      }
    case SET_NEW_ROOM_ID:
      return {
        ...state,
        id: action.id,
      }
    case CLEAR_NEW_ROOM_DATA:
      return initialState
    case types.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
