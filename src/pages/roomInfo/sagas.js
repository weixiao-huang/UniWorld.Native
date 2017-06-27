import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import * as navTypes from '@/router/types'

import {
  SET_ROOM_INFO,
  CLEAR_ROOM_INFO,
  SET_ROOM_INFO_DATA,
  JOIN_ROOM,
  LEAVE_ROOM,
} from './types'

const fetchApi = (id, token) => api.fetchRoomInfo(id)(token)
  .then(handleApiErrors)
  .then(res => res.json())

const baseApi = (apiFunc, id, token) => apiFunc(id)(token)
  .then(handleApiErrors)

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const action = yield take([
      navTypes.NAVIGATE_TO_ROOM_INFO,
      JOIN_ROOM,
      LEAVE_ROOM,
    ])
    const state = yield select()
    const token = state.auth.token
    const myInfo = state.me.userInfo
    let roomInfo = state.roomInfo.roomInfo
    const roomId = roomInfo ? roomInfo.id : action.id
    switch (action.type) {
      case navTypes.NAVIGATE_TO_ROOM_INFO:
        yield put({ type: CLEAR_ROOM_INFO })
        break
      case LEAVE_ROOM:
        yield call(baseApi, api.leaveRoom, roomId, token)
        break
      case JOIN_ROOM:
        yield call(baseApi, api.joinRoom, roomId, token)
        break
      default:
    }
    roomInfo = yield call(fetchApi, roomId, token)
    yield put({ type: SET_ROOM_INFO, roomInfo })
    if (myInfo) {
      const myId = myInfo.id
      const isMarked = roomInfo.marked_users.indexOf(myId) >= 0
      let isJoined = false
      roomInfo.participants.map((item) => {
        if (item.id === myId) isJoined = true
        return item
      })
      yield put({ type: SET_ROOM_INFO_DATA, data: { isJoined, isMarked } })
    }
  }
}
