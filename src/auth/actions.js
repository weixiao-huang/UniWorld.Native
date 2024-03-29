import {
  SEND_MESSAGE,
  CLIENT_UNSET,
  CLIENT_SET,
  SET_ALERT,
  UNFOLLOW_USER,
  FOLLOW_USER,
  SET_ALERT_MESSAGE,
  RESET_UNREAD_MESSAGE,
  LOGOUT_DEVICE_TOKEN,
  POST_DEVICE_TOKEN,
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

export const LogoutDeviceToken = () => ({
  type: LOGOUT_DEVICE_TOKEN,
})

export const PostDeviceToken = () => ({
  type: POST_DEVICE_TOKEN,
})

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

export const SendMessage = message => ({
  type: SEND_MESSAGE,
  message,
})

export const ResetUnreadMessage = id => ({
  type: RESET_UNREAD_MESSAGE,
  id,
})
