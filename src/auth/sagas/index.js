import {
  take, fork, cancel, call, select, cancelled,
} from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/constants'

import api from '@/api'
import { baseApi } from '@/lib/api-libs'
import { handleApiErrors } from '@/lib/api-errors'

import {
  INITIAL_WEBSOCKET,
  CLIENT_UNSET,
  FOLLOW_USER,
  UNFOLLOW_USER,
  POST_DEVICE_TOKEN,
  POST_UNREAD_COUNT,
  LOGOUT_DEVICE_TOKEN,
} from '../types'

import handleWebSocket from './ws'
import noticeFlow from './notice'

const postUnreadCount = (unread, token) => (
  api.postUnreadCount(unread)(token)
    .then(handleApiErrors)
)

const postDeviceToken = (deviceToken, token) => (
  api.postDeviceToken(deviceToken)(token)
    .then(handleApiErrors)
)

function* eventFlow(auth) {
  let wsTask
  let noticeTask
  try {
    const { token } = auth
    if (token) {
      wsTask = yield fork(handleWebSocket)
      noticeTask = yield fork(noticeFlow)
    }
  } catch (error) {
    console.log('event flow error: ', error)
  } finally {
    if (yield cancelled()) {
      console.log('event flow close in finally')
      if (wsTask) yield cancel(wsTask)
      if (noticeTask) yield cancel(noticeTask)
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
      POST_UNREAD_COUNT,
      POST_DEVICE_TOKEN,
      LOGOUT_DEVICE_TOKEN,
    ])
    const {
      auth: { token, unreadMessages, deviceToken },
    } = yield select()
    try {
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
            if (task) yield cancel(task)
            task = yield fork(eventFlow, auth)
          }
          break
        case POST_UNREAD_COUNT:
          if (token) {
            const unreadArray = Object.values(unreadMessages)
            const unread = unreadArray.length > 0 ?
              unreadArray.reduce((a, b) => a + b) : 0
            console.log('unread: ', unread)
            console.log('token: ', token)
            postUnreadCount(unread, token)
          }
          break
        case POST_DEVICE_TOKEN:
          if (token && deviceToken) postDeviceToken(deviceToken.token, token)
          break
        case LOGOUT_DEVICE_TOKEN:
          if (token) postDeviceToken('abcd', token)
          break
        case CLIENT_UNSET:
          console.log('task will be cancelled: ', task)
          if (task) yield cancel(task)
          break
        default:
      }
    } catch (e) {
      console.log('auth sagas error: ', e)
    }
  }
}
