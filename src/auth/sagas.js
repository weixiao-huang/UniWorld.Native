import {
  take, fork, cancel, call, put, cancelled, select,
} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { REHYDRATE } from 'redux-persist/constants'
import Reactotron from 'reactotron-react-native'

import { handleApiErrors } from '@/lib/api-errors'
import { baseApi } from '@/lib/api-libs'
import api from '@/api'

import * as loginTypes from '@/pages/login/types'

import {
  INITIAL_WEBSOCKET,
  CLIENT_UNSET,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_ROOM_MESSAGE,
} from './types'

const checkMailboxApi = (pmid, token) => api.checkMailbox(pmid)(token)
  .then(handleApiErrors)

const initialWebSocket = (pmid, token) => eventChannel((emit) => {
  const ws = api.initialWebSocket(token)

  ws.onopen = () => checkMailboxApi(pmid, token)

  ws.onerror = (error) => {
    throw error
  }

  ws.onmessage = e => {
    console.log('web socket message: ', e.data)
    emit({
      type: SET_ROOM_MESSAGE,
      message: JSON.parse(e.data),
    })
  }

  return () => {
    console.log('Socket off')
  }
})

function* wsFlow(channel) {
  while (true) {
    try {
      const { type, message } = yield take(channel)
      yield put({ type, message })
    } catch (error) {
      console.log('websoket error: ', error)
    } finally {
      if (yield cancelled()) channel.close()
    }
  }
}


export default function* () {
  const payload = yield take(REHYDRATE)
  let task
  if (payload && payload.auth && payload.auth.token) {
    const { token, pmid } = payload.auth
    const channel = yield call(initialWebSocket, pmid, token)
    task = yield fork(wsFlow, channel)
  }
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
          const { auth: { pmid } } = yield select()
          const channel = yield call(initialWebSocket, pmid, token)
          task = yield fork(wsFlow, channel)
        }
        break
      case CLIENT_UNSET:
        if (task) yield cancel(task)
        break
      default:
    }
  }
}
