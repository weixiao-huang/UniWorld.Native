import { take, select, call, put } from 'redux-saga/effects'

import { SetAlert } from '@/auth/actions'
import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import {
  SET_WORLD_DATA,
} from './types'

function fetchApi(token) {
  const apis = [
    api.fetchLatest(token),
    api.fetchWorld(token),
    api.fetchPosters(token),
    api.fetchTop(token),
  ]
  return Promise.all(apis)
    .then(item => item.map(handleApiErrors))
    .then(responses => Promise.all(
      responses.map(item => item.json())),
    )
}

const index = 0

export default function* worldWatch() {
  yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    if (state.nav.routes[0].routeName === 'homeTab' &&
        state.nav.routes[0].index === index
    ) {
      // TODO: fetch data and add them into reducer
      if (state.auth.alert) yield put(SetAlert(false))
      if (
        (!state.world.world ||
        !state.world.recommend ||
        !state.world.latest ||
        !state.world.posters)
      ) {
        try {
          const token = state.auth.token
          console.log('token', token)
          const data = yield call(fetchApi, token)
          yield put({
            type: SET_WORLD_DATA,
            data: {
              latest: data[0],
              world: data[1],
              posters: data[2],
              recommend: data[3],
            },
          })
        } catch (error) {
          // Error handle
          console.log('fetch world error: ', error)
        }
      }
    }
    yield take('*')
  }
}
