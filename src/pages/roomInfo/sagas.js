import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'
import { baseApi } from '@/lib/api-libs'

import * as navTypes from '@/router/types'
import * as authTypes from '@/auth/types'
import * as meTypes from '@/pages/me/types'

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

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const action = yield take([
      navTypes.NAVIGATE_TO_ROOM_INFO,
      authTypes.FOLLOW_USER,
      authTypes.UNFOLLOW_USER,
      JOIN_ROOM,
      LEAVE_ROOM,
    ])
    let state = yield select()
    const token = state.auth.token
    let roomInfo = state.roomInfo.roomInfo
    const roomId = action.id || roomInfo.id
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
      case authTypes.FOLLOW_USER:
      case authTypes.UNFOLLOW_USER:
        yield take(meTypes.FETCH_MY_USER_INFO_SUCCESS)
        state = yield select()
        break
      default:
    }
    if (action.type !== authTypes.FOLLOW_USER &&
        action.type !== authTypes.UNFOLLOW_USER) {
      roomInfo = yield call(fetchApi, roomId, token)
      yield put({ type: SET_ROOM_INFO, roomInfo })
    }
    const myInfo = state.me.userInfo
    if (myInfo) {
      const { id: myId, follows: myFollows } = myInfo
      const hostId = roomInfo.host.id
      const isMarked = roomInfo.marked_users.indexOf(myId) >= 0
      let hostFollowed = false
      myFollows.map((follow) => {
        if (hostId === follow.id) hostFollowed = true
        return follow
      })
      let isJoined = false
      roomInfo.participants.map((item) => {
        if (item.id === myId) isJoined = true
        return item
      })
      yield put({
        type: SET_ROOM_INFO_DATA,
        data: {
          isJoined,
          isMarked,
          hostFollowed,
        },
      })
    }
  }
}
