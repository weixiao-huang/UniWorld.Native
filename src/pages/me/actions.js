import {
  SET_MY_USER_INFO,
  PUT_MY_USER_INFO,
  FETCH_MY_USER_INFO,
} from './types'

export const SetMyUserInfo = userInfo => ({
  type: SET_MY_USER_INFO,
  userInfo,
})

export const PutMyUserInfo = userInfo => ({
  type: PUT_MY_USER_INFO,
  userInfo,
})

export const FetchMyUserInfo = () => ({
  type: FETCH_MY_USER_INFO,
})
