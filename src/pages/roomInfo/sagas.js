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
  MARK_ROOM,
  UNMARK_ROOM,
<<<<<<< HEAD
  FETCH_ROOM_INFO,
=======
>>>>>>> merge
} from './types'

const fetchApi = (id, token) => api.fetchRoomInfo(id)(token)
  .then(handleApiErrors)
  .then(res => res.json())

const fetchParticipantsApi = (id, token) => (
  api.fetchParticipants(id)(token)
    .then(handleApiErrors)
    .then(res => res.json())
)

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const action = yield take([
      navTypes.NAVIGATE_TO_ROOM_INFO,
      authTypes.FOLLOW_USER,
      authTypes.UNFOLLOW_USER,
      // MARK_ROOM,
      // UNMARK_ROOM,
      JOIN_ROOM,
      LEAVE_ROOM,
      FETCH_ROOM_INFO,
    ])
    let state = yield select()
    const token = state.auth.token
    let roomInfo = state.roomInfo.roomInfo
    const roomId = action.id || roomInfo.id
    try {
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
        case MARK_ROOM:
          yield call(baseApi, api.markRoom, roomId, token)
          yield put({ type: SET_ROOM_INFO_DATA, data: { isMarked: true } })
          break
        case UNMARK_ROOM:
          yield call(baseApi, api.unmarkRoom, roomId, token)
          yield put({ type: SET_ROOM_INFO_DATA, data: { isMarked: false } })
          break
        case authTypes.FOLLOW_USER:
        case authTypes.UNFOLLOW_USER:
          yield take(meTypes.FETCH_MY_USER_INFO_SUCCESS)
          state = yield select()
          break
        default:
      }
      if (action.type === FETCH_ROOM_INFO) {
        yield put({
          type: SET_ROOM_INFO,
          roomInfo: yield call(fetchApi, roomId, token),
        })
      } else {
        const myInfo = state.me.userInfo
        if (action.type !== authTypes.FOLLOW_USER &&
            action.type !== authTypes.UNFOLLOW_USER) {
          const {
            participants,
          } = yield call(fetchParticipantsApi, roomId, token)
          roomInfo = yield call(fetchApi, roomId, token)
          const data = { roomInfo }
          if (myInfo) {
            data.isJoined = false
            participants.map((item) => {
              if (item.id === myInfo.id) data.isJoined = true
              return item
            })
            if (action.type === authTypes.NAVIGATE_TO_ROOM_INFO) {
              const isMarked = roomInfo.marked_users.indexOf(myInfo.id) >= 0
              data.isMarked = isMarked
            }
          }
          yield put({ type: SET_ROOM_INFO_DATA, data })
        }
        if (myInfo) {
          const { follows: myFollows } = myInfo
          const hostId = roomInfo.host.id

          let hostFollowed = false
          myFollows.map((follow) => {
            if (hostId === follow.id) hostFollowed = true
            return follow
          })

          yield put({
            type: SET_ROOM_INFO_DATA,
            data: {
              hostFollowed,
            },
          })
        }
      }
    } catch (e) {
      console.log('room info sagas error', e)
    }
  }
}
