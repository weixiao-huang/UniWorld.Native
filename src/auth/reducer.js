import { Map } from 'immutable'
import { CLIENT_SET, CLIENT_UNSET } from './types'

const initialState = Map({
  // id: null,
  token: null,
})

const reducer = function clientReducer(state = initialState, action) {
  switch (action.type) {
    case CLIENT_SET:
      return state.set('token', action.token)
    case CLIENT_UNSET:
      return initialState
    default:
      return state
  }
}

export default reducer
