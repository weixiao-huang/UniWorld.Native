import {
  FETCH_ROOM_INFO,
  CLEAR_ROOM_INFO,
  FETCH_PARTICIPANTS,
  LEAVE_ROOM,
} from './types'

export const FetchRoomInfo = id => ({
  type: FETCH_ROOM_INFO,
  id,
})

export const ClearRoomInfo = () => ({
  type: CLEAR_ROOM_INFO,
})

export const LeaveRoom = () => ({
  type: LEAVE_ROOM,
})

export const FetchParticipants = () => ({
  type: FETCH_PARTICIPANTS,
})
