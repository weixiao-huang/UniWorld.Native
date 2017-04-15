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
  match: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_LABEL:
      return {
        ...state,
        labels: state.labels.concat(action.label)
      }
    case types.SET_MATCH:
      return {
        ...state,
        match: action.match
      }
    default:
      return state
  }
}
