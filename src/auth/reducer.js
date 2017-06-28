import {
  CLIENT_SET,
  CLIENT_UNSET,
  SET_INITIAL_LABELS,
  SET_ALERT,
  INITIAL_WEBSOCKET,
} from './types'

const initialState = {
  // id: null,
  token: null,
  initialLabels: null,
  alert: false,
  messages: {},
  wx: null,
}

const reducer = function clientReducer(state = initialState, action) {
  switch (action.type) {
    case CLIENT_SET:
      return {
        ...state,
        token: action.token,
      }
    case CLIENT_UNSET:
      return {
        ...state,
        token: null,
      }
    case SET_INITIAL_LABELS:
      return {
        ...state,
        initialLabels: action.initialLabels,
      }
    case SET_ALERT:
      return {
        ...state,
        alert: action.alert,
      }
    default:
      return state
  }
}

export default reducer
