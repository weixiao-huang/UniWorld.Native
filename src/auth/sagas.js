import { take, fork, cancel, call, put, cancelled, select } from 'redux-saga/effects'
import Reactotron from 'reactotron-react-native'

import { handleApiErrors } from '@/lib/api-errors'
import api from '@/api'

import {
  INITIAL_WEBSOCKET,
} from './types'

const checkMailboxApi = (pmid, token) => api.checkMailbox(pmid)(token)
  .then(handleApiErrors)

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    yield take(INITIAL_WEBSOCKET)
    const state = yield select()
    const {
      auth: { token },
      userInfo: { userInfo },
    } = state
    if (token && userInfo) {
      // const ws = api.initialWebSocket(token)
      // const pmid = userInfo.prev_message_id
      // ws.onopen = () => checkMailboxApi(pmid, token)
      // ws.onmessage = message => {
      // }
    }
  }
}
