/**
 * Created by huangwx on 15/04/2017.
 */

import * as types from '../types'

const initialState = {
  labels: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.GET_INITIAL_LABELS:
      return {
        ...state,
        labels: action.labels
      }
    default:
      return state
  }
}
