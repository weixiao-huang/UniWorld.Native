import {
  LOGIN_REQUEST,
  FETCH_USER_INFO,
} from './types'


/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  username,
  password,
})

export const fetchUserInfo = token => ({
  type: FETCH_USER_INFO,
  token,
})
