import {
  INITIAL_WEBSOCKET,
  CLIENT_UNSET,
  CLIENT_SET,
  SET_ALERT,
  UNFOLLOW_USER,
  FOLLOW_USER,
  SET_ALERT_MESSAGE,
} from './types'

export function setClient(token) {
  return {
    type: CLIENT_SET,
    token,
  }
}

export function unSetClient() {
  return {
    type: CLIENT_UNSET,
  }
}

export const SetAlert = alert => ({
  type: SET_ALERT,
  alert,
})

export const SetAlertMessage = messages => ({
  type: SET_ALERT_MESSAGE,
  messages,
})

export const FollowUser = id => ({
  type: FOLLOW_USER,
  id,
})

export const UnfollowUser = id => ({
  type: UNFOLLOW_USER,
  id,
})
