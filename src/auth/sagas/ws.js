import {
  take, fork, cancel, call, put, cancelled, select,
} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

import { handleApiErrors } from '@/lib/api-errors'
import api from '@/api'

import { NavigateToRoomDetails } from '@/router/actions'

import noticeEvent from './notification'

import {
  SET_ROOM_MESSAGE,
  SEND_MESSAGE,
} from '../types'

const checkMailboxApi = (pmid, token) => (
  api.checkMailbox(pmid)(token)
    .then(handleApiErrors)
)

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

function* noticeFlow() {
  const channel = noticeEvent()
  while (true) {
    try {
      const roomId = yield take(channel)
      yield put(NavigateToRoomDetails(roomId))
    } catch (error) {
      console.log('notification channel error: ', error)
    } finally {
      if (yield cancelled()) channel.close()
    }
  }
}

function* receiveFlow(ws) {
  const channel = configWebSocket(ws)
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

export default function* wsFlow(auth) {
  let receive
  let send
  let notice
  try {
    const { token, pmid } = auth
    if (token) {
      const ws = createWebSocket(pmid, token)
      receive = yield fork(receiveFlow, ws)
      send = yield fork(sendFlow, ws)
      notice = yield fork(noticeFlow)
    }
  } catch (error) {
    console.log('ws flow error: ', error)
  } finally {
    if (yield cancelled()) {
      if (receive) cancel(receive)
      if (send) cancel(send)
      if (notice) cancel(notice)
    }
  }
}