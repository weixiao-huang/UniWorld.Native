import {
  CLIENT_SET,
  CLIENT_UNSET,
  SET_INITIAL_LABELS,
  SET_ALERT,
  INITIAL_WEBSOCKET,
  SET_ALERT_MESSAGE,
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
    case SET_ALERT_MESSAGE:
      return {
        ...state,
        messages: action.messages,
      }
    default:
      return state
  }
}

export default reducer
