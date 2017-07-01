import {
  FETCH_ROOM_INFO,
  CLEAR_ROOM_INFO,
} from './types'

export const FetchRoomInfo = id => ({
  type: FETCH_ROOM_INFO,
  id,
})

export const ClearRoomInfo = () => ({
  type: CLEAR_ROOM_INFO,
})
