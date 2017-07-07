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

const initialWebSocket = (token, pmid) => {
  const ws = api.initialWebSocket(token)
  const promise = new Promise((resolve, reject) => {
    ws.onopen = () => checkMailboxApi(pmid, token)
    ws.onerror = (error) => {
      console.log('web socket onerror: ', error.message)
    }
    ws.onmessage = (e) => {
      console.log('web socket message: ', e.data)
      resolve(e.data)
    }
    ws.onclose = (e) => {
      console.log('Socket is closed: ', e.message)
      reject(e.message)
    }
  })
  return { ws, promise }
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

function* handleWebSocket(auth) {
  const { token, pmid } = auth
  let { ws, promise } = initialWebSocket(token, pmid)
  let send = yield fork(sendFlow, ws)
  while (true) {
    try {
      const data = yield promise
      console.log(data)
      // Receive Message Handle
      // const { nav: { routes } } = yield select()
      // let id = -1
      // if (routes.slice(-1)[0].routeName === 'roomDetails') {
      //   id = routes.slice(-1)[0].params.id
      // }
      // yield put({
      //   type: SET_ROOM_MESSAGE,
      //   message, id,
      // })
    } catch (e) {
      console.log('error: ', e)
      const body = initialWebSocket(token, pmid)
      send = yield fork(sendFlow, body.ws)
      ws = body.ws
      promise = body.promise
    }
  }
}
