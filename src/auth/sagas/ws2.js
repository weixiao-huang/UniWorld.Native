import {
  take, fork, cancel, put, cancelled, select,
} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

import { handleApiErrors } from '@/lib/api-errors'
import api from '@/api'

import noticeFlow from './notice'

import {
  SET_ROOM_MESSAGE,
  SEND_MESSAGE,
} from '../types'

const checkMailboxApi = (pmid, token) => (
  api.checkMailbox(pmid)(token)
    .then(handleApiErrors)
)

function* receiveFlow(channel) {
  while (true) {
    try {
      const { type, message } = yield take(channel)
      const { nav: { routes } } = yield select()
      let id = -1
      if (routes.slice(-1)[0].routeName === 'roomDetails') {
        id = routes.slice(-1)[0].params.id
      }
      yield put({ type, message, id })
    } catch (error) {
      console.log('websoket error: ', error)
    } finally {
      if (yield cancelled()) channel.close()
    }
  }
}

const SOCKET_CHANNEL_RECONNECT = 'SOCKET_CHANNEL_RECONNECT'

function initialWebSocket(token, pmid) {
  const ws = api.initialWebSocket(token)
  ws.onopen = () => checkMailboxApi(pmid, token)
  const channel = eventChannel((emit) => {
    ws.onerror = (error) => {
      console.log('web socket onerror: ', error.message)
      channel.close()
    }
    ws.onmessage = (e) => {
      console.log('web socket message: ', e.data)
      emit({
        type: SET_ROOM_MESSAGE,
        message: JSON.parse(e.data),
      })
    }
    ws.onclose = e => console.log('Socket is closed: ', e.message)
    return () => {
      console.log('Channel off, reconnect will be attempted in 1 second...')
      setTimeout(() => emit({
        type: SOCKET_CHANNEL_RECONNECT,
        ...initialWebSocket(token, pmid),
      }), 1000)
    }
  })
  return { ws, channel }
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

function* channelHandler(channel) {
  while (true) {
    try {
      const { type, message } = yield take(channel)
      const { nav: { routes } } = yield select()
      let id = -1
      if (routes.slice(-1)[0].routeName === 'roomDetails') {
        id = routes.slice(-1)[0].params.id
      }
      yield put({ type, message, id })
    } catch (error) {
      console.log('websoket error: ', error)
    } finally {
      if (yield cancelled()) channel.close()
    }
  }
}

export default function* wsFlow(auth) {
  const { token, pmid } = auth
  const { ws, channel } = initialWebSocket(token, pmid)

  const receive = yield fork(receiveFlow, channel)
  const send = yield fork(sendFlow, ws)
  const notice = yield fork(noticeFlow)

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

