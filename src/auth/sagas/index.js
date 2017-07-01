import {
  take, fork, cancel, call, select,
} from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/constants'

import api from '@/api'
import { baseApi } from '@/lib/api-libs'

import {
  INITIAL_WEBSOCKET,
  CLIENT_UNSET,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from '../types'

import wsFlow from './ws'

export default function* () {
  const { payload } = yield take(REHYDRATE)
  let task
  if (payload && payload.auth) task = yield fork(wsFlow, payload.auth)
  while (true) {
    const { type, id } = yield take([
      CLIENT_UNSET,
      INITIAL_WEBSOCKET,
      FOLLOW_USER,
      UNFOLLOW_USER,
    ])
    const { auth: { token } } = yield select()
    switch (type) {
      case FOLLOW_USER:
        yield call(baseApi, api.followUser, id, token)
        break
      case UNFOLLOW_USER:
        yield call(baseApi, api.unfollowUser, id, token)
        break
      case INITIAL_WEBSOCKET:
        if (token) {
          const { auth } = yield select()
          task = yield fork(wsFlow, auth)
        }
        break
      case CLIENT_UNSET:
        if (task) yield cancel(task)
        break
      default:
    }
  }
}
