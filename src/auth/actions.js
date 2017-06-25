import {
  CLIENT_SET,
  CLIENT_UNSET,
  SET_ALERT,
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
