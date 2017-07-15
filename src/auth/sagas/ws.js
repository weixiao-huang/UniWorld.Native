import {
  take, fork, cancel, put, cancelled, select, call,
} from 'redux-saga/effects'
import { eventChannel, delay } from 'redux-saga'

import { handleApiErrors } from '@/lib/api-errors'
import api from '@/api'

import * as channelTypes from './types'

import {
  SET_ROOM_MESSAGE,
  SEND_MESSAGE,
  SET_SOCKET_CONNECT_STATUS,
  SET_SOCKET_RECONNECT,
} from '../types'

const checkMailboxApi = (pmid, token) => (
  api.checkMailbox(pmid)(token)
    .then(handleApiErrors)
)

function initialWebSocket(token, pmid) {
  console.log('INITIAL_WEBSOCKET PMID: ', pmid)
  const ws = api.initialWebSocket(token)
  ws.onopen = () => checkMailboxApi(pmid, token)

  const channel = eventChannel((emit) => {
    ws.onerror = (error) => {
      console.log('web socket onerror: ', error.message)
    }
    ws.onmessage = (e) => {
      console.log('web socket message: ', e.data)
      emit({
        type: SET_ROOM_MESSAGE,
        message: JSON.parse(e.data),
      })
    }
    ws.onclose = (e) => {
      console.log('Socket is closed: ', e.message)
      console.log('reconnect will be attempted in 1 second...')
      emit({ type: channelTypes.SOCKET_CONNECT_ERROR })
      setTimeout(() => {
        emit({ type: channelTypes.SOCKET_CHANNEL_RECONNECT })
      }, 1000)
    }
    return () => console.log('channel closed')
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
      if (yield cancelled()) {
        console.log('sendFlow cancelled')
      }
    }
  }
}

function* checkSocket(status) {
  yield delay(800)
  if (!status) {
    yield put({
      type: SET_SOCKET_CONNECT_STATUS,
      socketConnectStatus: true,
    })
  }
}

function* reconnectSocket() {
  yield delay(1500)
  yield put({
    type: SET_SOCKET_RECONNECT,
    socketReconnect: false,
  })
}

export default function* handleWebsocket() {
  let { auth: { token, pmid } } = yield select()
  let { ws, channel } = yield call(initialWebSocket, token, pmid)
  let sendTask
  let reconnectTask
  let checkTask
  try {
    // Send Message
    sendTask = yield fork(sendFlow, ws)
    yield put({
      type: SET_SOCKET_CONNECT_STATUS,
      socketConnectStatus: true,
    })
    while (true) {
      const { type, message } = yield take(channel)
      const { auth } = yield select()
      if (type === channelTypes.SOCKET_CHANNEL_RECONNECT) {
        checkTask = yield fork(checkSocket, auth.socketConnectStatus)
        channel.close()
        token = auth.token
        pmid = auth.pmid
        const body = yield call(initialWebSocket, token, pmid)
        ws = body.ws
        channel = body.channel
        if (sendTask) yield cancel(sendTask)
        sendTask = yield fork(sendFlow, ws)

        if (reconnectTask) yield cancel(reconnectTask)
        if (!auth.socketReconnect) {
          yield put({
            type: SET_SOCKET_RECONNECT,
            socketReconnect: true,
          })
        }
      } else if (type === channelTypes.SOCKET_CONNECT_ERROR) {
        reconnectTask = yield fork(reconnectSocket)
        if (checkTask) yield cancel(checkTask)
        if (auth.socketConnectStatus) {
          yield put({
            type: SET_SOCKET_CONNECT_STATUS,
            socketConnectStatus: false,
          })
        }
      } else if (type === SET_ROOM_MESSAGE) {
        // Set Room Message
        const { nav: { routes } } = yield select()
        let id = -1
        if (routes.slice(-1)[0].routeName === 'roomDetails') {
          id = routes.slice(-1)[0].params.id
        }
        yield put({ type, message, id })
      }
    }
  } catch (error) {
    console.log('handleWebSocket error: ', error)
  } finally {
    if (yield cancelled() && sendTask) {
      console.log('cancelled websocket handler')
      yield cancel(sendTask)
    }
  }
}
