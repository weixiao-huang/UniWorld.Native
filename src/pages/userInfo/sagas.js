import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import * as navTypes from '@/router/types'
import * as authTypes from '@/auth/types'

import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  SET_FOLLOWED,
} from './types'

function fetchApi(token, id) {
  return api.fetchUser(id)(token)
    .then(handleApiErrors)
    .then(res => res.json())
}

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const { id } = yield take(navTypes.NAVIGATE_TO_USER_INFO)
    const state = yield select()
    const token = state.auth.token
    let isFollowed = false
    state.me.userInfo.follows.map((user) => {
      if (user.id === id) isFollowed = true
      return user
    })
    yield put({ type: CLEAR_USER_INFO })
    yield put({ type: SET_FOLLOWED, isFollowed })
    const userInfo = yield call(fetchApi, token, id)
    yield put({ type: SET_USER_INFO, userInfo })
  }
}
