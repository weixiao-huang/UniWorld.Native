import { Map } from 'immutable'
import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import {
  SET_MY_USER_INFO,
} from './types'

function fetchApi(token) {
  return api.fetchUserInfo(token)
    .then(handleApiErrors)
    .then(res => res.json())
}

const index = 3

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    console.log('me testState', state)
    if (state.getIn(['nav', 'routes', 0, 'routeName']) === 'homeTab' &&
        state.getIn(['nav', 'routes', 0, 'index']) === index &&
        !state.getIn(['me', 'userInfo'])
    ) {
      // TODO: fetch data and add them into reducer
      try {
        const token = state.getIn(['auth', 'token'])
        const data = yield call(fetchApi, token)
        yield put({
          type: SET_MY_USER_INFO,
          userInfo: Map(data),
        })
      } catch (error) {
        // Error handle
        console.log('fetch my room list error: ', error)
      }
    }
    yield take('*')
  }
}
