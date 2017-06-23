import {
  CLIENT_SET,
  CLIENT_UNSET,
  SET_INITIAL_LABELS,
} from './types'

const initialState = {
  // id: null,
  token: null,
  initialLabels: null,
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
    default:
      return state
  }
}

export default reducer
