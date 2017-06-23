import {
  NAVIGATE_TO_ROOM_INFO,
  NAVIGATE_TO_USER_INFO,
} from './types'

export const NavigateToRoomInfo = id => ({
  type: NAVIGATE_TO_ROOM_INFO,
  id,
})

export const NavigateToUserInfo = id => ({
  type: NAVIGATE_TO_USER_INFO,
  id,
})
