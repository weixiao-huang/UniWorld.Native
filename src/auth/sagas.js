import { take, fork, cancel, call, put, cancelled, select } from 'redux-saga/effects'
import Reactotron from 'reactotron-react-native'

import { handleApiErrors } from '@/lib/api-errors'
import { baseApi } from '@/lib/api-libs'
import api from '@/api'

import {
  INITIAL_WEBSOCKET,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from './types'

const checkMailboxApi = (pmid, token) => api.checkMailbox(pmid)(token)
  .then(handleApiErrors)

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const action = yield take([
      INITIAL_WEBSOCKET,
      FOLLOW_USER,
      UNFOLLOW_USER,
    ])
    const { auth: { token } } = yield select()
    switch (action.type) {
      case FOLLOW_USER:
        yield call(baseApi, api.followUser, action.id, token)
        break
      case UNFOLLOW_USER:
        yield call(baseApi, api.unfollowUser, action.id, token)
        break
      case INITIAL_WEBSOCKET:
        break
      default:
    }
    // yield take(INITIAL_WEBSOCKET)
    // const state = yield select()
    // const {
    //   auth: { token },
    //   userInfo: { userInfo },
    // } = state
    // if (token && userInfo) {
      // const ws = api.initialWebSocket(token)
      // const pmid = userInfo.prev_message_id
      // ws.onopen = () => checkMailboxApi(pmid, token)
      // ws.onmessage = message => {
      // }
    // }
  }
}
