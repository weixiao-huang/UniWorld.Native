import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import * as navTypes from '@/router/types'

import {
  SET_ROOM_INFO,
  CLEAR_ROOM_INFO,
} from './types'

function fetchApi(token, id) {
  return api.fetchRoomInfo(id)(token)
    .then(handleApiErrors)
    .then(res => res.json())
}

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    const token = state.auth.token
    const { id } = yield take(navTypes.NAVIGATE_TO_ROOM_INFO)
    yield put({ type: CLEAR_ROOM_INFO })
    const roomInfo = yield call(fetchApi, token, id)
    yield put({ type: SET_ROOM_INFO, roomInfo })
  }
}
