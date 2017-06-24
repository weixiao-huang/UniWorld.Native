import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import * as navTypes from '@/router/types'

import {
  SET_ROOM_DETAILS,
  CLEAR_ROOM_DETAILS,
} from './types'

function fetchApi(token, id) {
  return api.fetchQuestionnaires(id)(token)
    .then(handleApiErrors)
    .then(res => res.json())
}

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    const token = state.auth.token
    const { id } = yield take(navTypes.NAVIGATE_TO_ROOM_DETAILS)
    yield put({ type: CLEAR_ROOM_DETAILS })
    const roomDetails = yield call(fetchApi, token, id)
    yield put({ type: SET_ROOM_DETAILS, roomDetails })
  }
}
