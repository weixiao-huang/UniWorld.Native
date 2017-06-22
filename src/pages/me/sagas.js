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
    if (state.nav.routes[0].routeName === 'homeTab' &&
        state.nav.routes[0].index === index &&
        !state.me.userInfo
    ) {
      // TODO: fetch data and add them into reducer
      try {
        const token = state.auth.token
        const data = yield call(fetchApi, token)
        yield put({
          type: SET_MY_USER_INFO,
          userInfo: data,
        })
      } catch (error) {
        // Error handle
        console.log('fetch my room list error: ', error)
      }
    }
    yield take('*')
  }
}
