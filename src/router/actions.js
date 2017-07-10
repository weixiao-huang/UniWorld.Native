import {
  RESET_TO_HOME,
  RESET_TO_LOGIN,
  NAVIGATE_TO_ROOM_INFO,
  NAVIGATE_TO_USER_INFO,
  NAVIGATE_TO_ROOM_DETAILS,
  NAVIGATE_TO_FIND_PASSWORD,
  NAVIGATE_TO_REGISTER,
  NAVIGATE_TO_REGISTERINFO,
  NAVIGATE_TO_CHANNELPAGE,
  GO_BACK,
} from './types'

export const GoBack = () => ({
  type: GO_BACK,
})

export const ResetToHome = () => ({
  type: RESET_TO_HOME,
})

export const ResetToLogin = () => ({
  type: RESET_TO_LOGIN,
})

export const NavigateToRegister = () => ({
  type: NAVIGATE_TO_REGISTER,
})

export const NavigateToRegisterInfo = () => ({
  type: NAVIGATE_TO_REGISTERINFO,
})

export const NavigateToChannelPage = id => ({
  type: NAVIGATE_TO_CHANNELPAGE,
  id,
})

export const NavigateToFindPassword = () => ({
  type: NAVIGATE_TO_FIND_PASSWORD,
})

export const NavigateToRoomInfo = id => ({
  type: NAVIGATE_TO_ROOM_INFO,
  id,
})

export const NavigateToRoomDetails = id => ({
  type: NAVIGATE_TO_ROOM_DETAILS,
  id,
})

export const NavigateToUserInfo = id => ({
  type: NAVIGATE_TO_USER_INFO,
  id,
})
