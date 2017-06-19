import { CLIENT_SET, CLIENT_UNSET } from './types'

export function setClient(token) {
  return {
    type: CLIENT_SET,
    token,
  }
}

export function unSetClient() {
  return {
    type: CLIENT_UNSET
  }
}
