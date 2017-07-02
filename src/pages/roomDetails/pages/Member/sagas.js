import { take, select, call, put } from 'redux-saga/effects'
import api from '@/api'
import { baseApi } from '@/lib/api-libs'
import * as navTypes from '@/router/types'


import {
  LEAVE_ROOM,
} from './types'


export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const action = yield take([
      navTypes.NAVIGATE_TO_ROOM_INFO,
      LEAVE_ROOM,
    ])
    const state = yield select()
    const token = state.auth.token
    const roomInfo = state.roomInfo.roomInfo
    const roomId = action.id || roomInfo.id
    try {
      switch (action.type) {
        case navTypes.NAVIGATE_TO_ROOM_INFO:
          if (state.roomInfo.roomInfo) yield put({ type: CLEAR_ROOM_INFO })
          break
        case LEAVE_ROOM:
          yield call(baseApi, api.leaveRoom, roomId, token)
          break
        default:
      }
    } catch (e) {
      console.log('room info sagas error', e)
    }
  }
}
