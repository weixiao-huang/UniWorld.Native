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
  SEND_MESSAGE,
} from './types'

const checkMailboxApi = (pmid, token) => api.checkMailbox(pmid)(token)
  .then(handleApiErrors)

const createWebSocket = (pmid, token) => {
  const ws = api.initialWebSocket(token)
  ws.onopen = () => checkMailboxApi(pmid, token)
  return ws
}

const configWebSocket = ws => eventChannel((emit) => {
  ws.onerror = (error) => { throw error }
  ws.onmessage = (e) => {
    console.log('web socket message: ', e.data)
    emit({
      type: SET_ROOM_MESSAGE,
      message: JSON.parse(e.data),
    })
  }
  return () => console.log('Socket off')
})

function* receiveFlow(ws) {
  const channel = configWebSocket(ws)
  console.log('ws: ', ws)
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

function* sendFlow(ws) {
  while (true) {
    try {
      const { message } = yield take(SEND_MESSAGE)
      ws.send(JSON.stringify(message))
    } catch (error) {
      console.log('send message error: ', error)
    } finally {
      // close operations
    }
  }
}

function* wsFlow(auth) {
  let receive
  let send
  try {
    const { token, pmid } = auth
    if (token) {
      const ws = createWebSocket(pmid, token)
      receive = yield fork(receiveFlow, ws)
      send = yield fork(sendFlow, ws)
    }
  } catch (error) {
    console.log('ws flow error: ', error)
  } finally {
    if (yield cancelled()) {
      if (receive) cancel(receive)
      if (send) cancel(send)
    }
  }
}

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
