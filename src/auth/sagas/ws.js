import {
  take, fork, cancel, put, cancelled, select, call,
} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

import { handleApiErrors } from '@/lib/api-errors'
import api from '@/api'

import {
  SOCKET_CHANNEL_RECONNECT,
  CHECK_SOCKET_CONNECT_STATUS,
  SOCKET_CONNECT_ERROR,
} from './types'

import {
  SET_ROOM_MESSAGE,
  SEND_MESSAGE,
  SET_SOCKET_CONNECT_STATUS,
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
      emit({ type: SOCKET_CONNECT_ERROR })
      setTimeout(() => {
        emit({ type: SOCKET_CHANNEL_RECONNECT })
        setTimeout(() => {
          emit({ type: CHECK_SOCKET_CONNECT_STATUS })
        }, 500)
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


export default function* handleWebsocket() {
  let { auth: { token, pmid } } = yield select()
  let { ws, channel } = yield call(initialWebSocket, token, pmid)
  let sendTask
  let connectFlag = false
  try {
    // Send Message
    sendTask = yield fork(sendFlow, ws)
    yield put({
      type: SET_SOCKET_CONNECT_STATUS,
      socketConnectStatus: true,
    })
    connectFlag = true
    while (true) {
      const { type, message } = yield take(channel)
      const { auth } = yield select()
      if (type === SOCKET_CHANNEL_RECONNECT) {
        // WebSocket Reconnect
        channel.close()
        token = auth.token
        pmid = auth.pmid
        const body = yield call(initialWebSocket, token, pmid)
        ws = body.ws
        channel = body.channel
        if (sendTask) yield cancel(sendTask)
        sendTask = yield fork(sendFlow, ws)
        connectFlag = true
      } else if (type === SOCKET_CONNECT_ERROR) {
        if (auth.socketConnectStatus) {
          yield put({
            type: SET_SOCKET_CONNECT_STATUS,
            socketConnectStatus: false,
          })
        }
        connectFlag = false
      } else if (type === CHECK_SOCKET_CONNECT_STATUS) {
        if (connectFlag && !auth.socketConnectStatus) {
          yield put({
            type: SET_SOCKET_CONNECT_STATUS,
            socketConnectStatus: true,
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
