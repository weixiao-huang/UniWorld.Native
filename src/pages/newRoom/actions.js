import {
  SET_NEW_ROOM_DATA,
  CREATE_NEW_ROOM_REQUEST,
} from './types'

export const SetNewRoomData = data => ({
  type: SET_NEW_ROOM_DATA,
  data,
})

export const CreateNewRoom = data => ({
  type: CREATE_NEW_ROOM_REQUEST,
  data,
})
