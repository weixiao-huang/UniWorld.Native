import { take, select, call, put } from 'redux-saga/effects'
import { SetAlert } from '@/auth/actions'
import api from '@/api'
import { handleApiErrors } from '@/lib/api-errors'

import { NavigateToRoomInfo } from '@/router/actions'

import {
  ResetAction,
} from './actions'

import {
  CREATE_NEW_ROOM_REQUEST,
  CLEAR_NEW_ROOM_DATA,
  RESET_TO_FIRST,
  SET_CREATING,
} from './types'

const createRoomApi = (data, token) => api.createRoom(data)(token)
  .then(handleApiErrors)
  .then(res => res.json())

const uploadCoverApi = (cover, roomId, token) => (
  api.uploadCover(cover)(roomId)(token)
    .then(handleApiErrors)
)

const index = 1

export default function* () {
  let action = yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    if (state.nav.routes[0].routeName === 'homeTab' &&
        state.nav.routes[0].index === index &&
        !state.auth.token
    ) yield put(SetAlert(true))
    else if (action.type === CREATE_NEW_ROOM_REQUEST) {
      yield put({ type: SET_CREATING, creating: true })
      const { newRoom: { cover }, auth: { token } } = state
      const roomId = yield call(createRoomApi, action.data, token)
      const formData = new FormData()
      if (cover) {
        formData.append('cover', { uri: cover, name: 'cover' })
        yield call(uploadCoverApi, formData, roomId, token)
      }
      yield put({ type: SET_CREATING, creating: false })
      yield put(NavigateToRoomInfo(roomId))
      yield put({ type: CLEAR_NEW_ROOM_DATA })
    }
    action = yield take('*')
  }
}
