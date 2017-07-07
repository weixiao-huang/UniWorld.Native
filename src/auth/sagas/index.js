import {
  take, fork, cancel, call, select, cancelled,
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

import handleWebSocket from './ws'
import noticeFlow from './notice'

function* eventFlow(auth) {
  let wsTask
  let noticeTask
  try {
    const { token, pmid } = auth
    if (token) {
      wsTask = yield fork(handleWebSocket, token, pmid)
      noticeTask = yield fork(noticeFlow)
    }
  } catch (error) {
    console.log('event flow erro: ', error)
  } finally {
    if (yield cancelled()) {
      if (wsTask) cancel(wsTask)
      if (noticeTask) cancel(noticeTask)
    }
  }
}

export default function* () {
  const { payload } = yield take(REHYDRATE)
  let task
  if (payload && payload.auth) task = yield fork(eventFlow, payload.auth)
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
        if (token && !task) {
          const { auth } = yield select()
          task = yield fork(eventFlow, auth)
        }
        break
      case CLIENT_UNSET:
        if (task) yield cancel(task)
        break
      default:
    }
  }
}
