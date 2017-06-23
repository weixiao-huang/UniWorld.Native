import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import * as navTypes from '@/router/types'

import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
} from './types'

function fetchApi(token, id) {
  return api.fetchUser(id)(token)
    .then(handleApiErrors)
    .then(res => res.json())
}

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    const token = state.auth.token
    const { id } = yield take(navTypes.NAVIGATE_TO_USER_INFO)
    yield put({ type: CLEAR_USER_INFO })
    const userInfo = yield call(fetchApi, token, id)
    yield put({ type: SET_USER_INFO, userInfo })
  }
}
