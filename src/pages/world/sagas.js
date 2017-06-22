import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import {
  SET_WORLD_DATA,
} from './types'

function fetchApi(token) {
  return Promise.all([
    api.fetchRecommend(token),
    api.fetchLatest(token),
    api.fetchWorld(token),
  ]).then(item => item.map(handleApiErrors))
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
        state.nav.routes[0].index === index &&
        (!state.world.world ||
        !state.world.recommend ||
        !state.world.latest)
    ) {
      // TODO: fetch data and add them into reducer
      try {
        const token = state.auth.token
        const data = yield call(fetchApi, token)
        yield put({
          type: SET_WORLD_DATA,
          data: {
            recommend: data[0],
            latest: data[1],
            world: data[2],
          },
        })
      } catch (error) {
        // Error handle
        console.log('fetch world error: ', error)
      }
    }
    yield take('*')
  }
}
