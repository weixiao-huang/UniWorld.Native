import { take, select, call, put } from 'redux-saga/effects'

import { SetAlert } from '@/auth/actions'
import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import {
  SET_WORLD_REFRESHING,
  SET_WORLD_DATA,
  FETCH_WORLD,
} from './types'

function fetchApi(token) {
  const apis = [
    api.fetchLatest(token),
    api.fetchWorld(token),
    api.fetchPosters(token),
    api.fetchChannels(token),
  ]
  if (token) apis.push(api.fetchTop(token))
  return Promise.all(apis)
    .then(item => item.map(handleApiErrors))
    .then(responses => Promise.all(
      responses.map(item => item.json())),
    )
}

const index = 0

export default function* worldWatch() {
  let action = yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    if (state.nav.routes[0].routeName === 'homeTab' &&
        state.nav.routes[0].index === index
    ) {
      if (state.auth.alert) yield put(SetAlert(false))
      const {
        world: { world, recommend, latest, posters, channels },
        auth: { token },
      } = state
      let condition = !world || !posters || !latest || !channels
      if (token) condition = condition || !recommend
      // TODO: fetch data and add them into reducer
      if (condition || action.type === FETCH_WORLD) {
        try {
          yield put({
            type: SET_WORLD_REFRESHING,
            refreshing: true,
          })
          const data = yield call(fetchApi, token)
          const worldData = {
            latest: data[0],
            world: data[1],
            posters: data[2],
            channels: data[3],
            refreshing: false,
          }
          if (token) worldData.recommend = data[4]
          yield put({
            type: SET_WORLD_DATA,
            data: worldData,
          })
        } catch (error) {
          // Error handle
          console.log('fetch world error: ', error)
        }
      }
    }
    action = yield take('*')
  }
}
