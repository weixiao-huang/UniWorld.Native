/**
 * Created by huangwx on 27/04/2017.
 */

import * as types from '../types'

const initialState = {
  loading: false,
  isPolling: false,
  showLoginModal: true
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case types.SET_COMMON_DATA:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}
