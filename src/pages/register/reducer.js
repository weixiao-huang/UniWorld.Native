import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './types'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
      }
    case LOGIN_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      }
    case LOGIN_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      }
    default:
      return state
  }
}
