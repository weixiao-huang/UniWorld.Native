import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'
import { Alert } from 'react-native'
import I18n from '@/locales'
import { handleApiErrors } from '@/lib/api-errors'
import { baseApi } from '@/lib/api-libs'
import { NavigateToRoomDetails, GoBack } from '@/router/actions'
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
  FETCH_ROOM_INFO,
  FOLLOW_OR_UNFOLLOW_USER,
  FOLLOW_OR_UNFOLLOW_SUCCESS,
  FETCH_PARTICIPANTS,
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
      FETCH_PARTICIPANTS,
    ])
    let state = yield select()
    const token = state.auth.token
    let roomInfo = state.roomInfo.roomInfo
    const roomId = action.id || roomInfo.id
    try {
      switch (action.type) {
        case navTypes.NAVIGATE_TO_ROOM_INFO:
          if (state.roomInfo.roomInfo) yield put({ type: CLEAR_ROOM_INFO })
          break
        case LEAVE_ROOM:
          yield put({ type: FOLLOW_OR_UNFOLLOW_USER })
          yield call(baseApi, api.leaveRoom, roomId, token)
          yield put({ type: FOLLOW_OR_UNFOLLOW_SUCCESS })
          break
        case JOIN_ROOM: {
          yield put({ type: FOLLOW_OR_UNFOLLOW_USER })
          const res = yield call(baseApi, api.joinRoom, roomId, token)
          yield put({ type: FOLLOW_OR_UNFOLLOW_SUCCESS })
          if (res.status === 200) yield put(NavigateToRoomDetails(roomId))
          else {
            Alert.alert(
              I18n.t('Room.footer.joinFailed'),
              I18n.t('Room.footer.fullRoom'),
              [
                {
                  text: 'OK',
                  onPress: () => { },
                },
              ],
            )
          }
          break
        }
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
          yield put({ type: FOLLOW_OR_UNFOLLOW_USER })
          yield take(meTypes.FETCH_MY_USER_INFO_SUCCESS)
          state = yield select()
          yield put({ type: FOLLOW_OR_UNFOLLOW_SUCCESS })
          break
        default:
      }
      if (action.type === FETCH_ROOM_INFO) {
        const { participants } = yield call(fetchParticipantsApi, roomId, token)
        yield put({
          type: SET_ROOM_INFO_DATA,
          data: {
            roomInfo: yield call(fetchApi, roomId, token),
            participants,
          },
        })
      } else if (action.type === FETCH_PARTICIPANTS) {
        const { participants } = yield call(fetchParticipantsApi, roomId, token)
        yield put({ type: SET_ROOM_INFO_DATA, data: { participants } })
      } else {
        const myInfo = state.me.userInfo
        if (action.type !== authTypes.FOLLOW_USER &&
          action.type !== authTypes.UNFOLLOW_USER) {
          roomInfo = yield call(fetchApi, roomId, token)
          const data = { roomInfo }
          if (data.banned) {
            Alert.alert(
              I18n.t('Room.banned'),
              [
                {
                  text: 'OK',
                  onPress: () => {
                    put(GoBack())
                  },
                },
              ],
            )
          }
          if (myInfo) {
            const {
              participants,
            } = yield call(fetchParticipantsApi, roomId, token)
            data.isJoined = false
            participants.map((item) => {
              if (item.id === myInfo.id) data.isJoined = true
              return item
            })
            data.participants = participants
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
