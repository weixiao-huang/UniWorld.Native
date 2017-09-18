import { take, select, call, put } from 'redux-saga/effects'
import { FetchRoomInfo, ClearRoomInfo } from '@/pages/roomInfo/actions'

import * as navTypes from '@/router/types'
import api from '@/api'
import { ResetUnreadMessage } from '@/auth/actions'
import { handleApiErrors } from '@/lib/api-errors'

import { SetMessageFailed } from '@/auth/actions'
import {
  FOLLOW_OR_UNFOLLOW_USER,
  FOLLOW_OR_UNFOLLOW_SUCCESS,
} from '@/pages/roomInfo/types'
import {
  SET_ROOM_DETAILS,
  CLEAR_ROOM_DETAILS,
  SEND_ANNOUNCEMENT,
} from './types'


const fetchApi = (token, id) => (
  api.fetchQuestionnaires(id)(token)
    .then(handleApiErrors)
    .then(res => res.json())
)

function* checkSendingTimeout() {
  const { auth: { sendingPool } } = yield select()
  const failedMessages = Object.values(sendingPool).filter(item => (
    (new Date() - Date.parse(item.time)) / 1000 / 60 > 1
  ))
  if (failedMessages.length > 0) {
    yield put(SetMessageFailed(failedMessages))
  }
}

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    try {
      const action = yield take([
        navTypes.NAVIGATE_TO_ROOM_DETAILS,
        SEND_ANNOUNCEMENT,
      ])
      const state = yield select()
      const token = state.auth.token
      const id = action.id || state.roomInfo.roomInfo.id
      if (!state.roomInfo.roomInfo) {
        yield put(FetchRoomInfo(id))
      }
      switch (action.type) {
        case navTypes.NAVIGATE_TO_ROOM_DETAILS: {
          yield put({ type: FOLLOW_OR_UNFOLLOW_USER })
          if (!state.roomInfo.roomInfo ||
              state.roomInfo.roomInfo.id !== action.id) {
            yield put(ClearRoomInfo())
            yield put(FetchRoomInfo(id))
          }
          if (!state.roomDetails.roomDetails ||
              state.roomInfo.roomInfo.id !== action.id) {
            yield put({ type: CLEAR_ROOM_DETAILS })
            yield put({
              type: SET_ROOM_DETAILS,
              roomDetails: yield call(fetchApi, token, id),
            })
          }
          yield put(ResetUnreadMessage(id))
          yield put({ type: FOLLOW_OR_UNFOLLOW_SUCCESS })
          break
        }
        case SEND_ANNOUNCEMENT:
          yield put({
            type: SET_ROOM_DETAILS,
            roomDetails: yield call(fetchApi, token, id),
          })
          break
        default:
      }
    } catch (e) {
      console.log('error in roomDetails sagas: ', e)
    }
  }
}
