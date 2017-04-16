/**
 * Created by huangwx on 16/04/2017.
 */

/**
 * Created by huangwx on 14/04/2017.
 */

import * as types from '../types'

const initialState = {
  title: '',
  labels: [],
  match: false,
  intro: '',
  date_time_start: '',
  date_time_end: '',
  max_participants: '',
  isPrivate: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_LABEL:
      return {
        ...state,
        labels: state.labels.concat(action.label)
      }
    case types.SET_NEW_ROOM_DATA:
      return {
        ...state,
        [action.name]: action.data
      }
    default:
      return state
  }
}
