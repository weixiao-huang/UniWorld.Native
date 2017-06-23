import { Map } from 'immutable'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './types'

const initialState = Map({
  requesting: false,
  successful: false,
  message: [],
  errors: [],
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.merge(Map({
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
      }))
    case LOGIN_SUCCESS:
      return state.merge(Map({
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      }))
    case LOGIN_ERROR:
      return state.merge(Map({
        errors: state.get('errors').concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      }))
    default:
      return state
  }
}
