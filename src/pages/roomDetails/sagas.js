import { take, select, call, put } from 'redux-saga/effects'
import { FetchRoomInfo } from '@/pages/roomInfo/actions'

import api from '../../api'

import { handleApiErrors } from '../../lib/api-errors'


import * as navTypes from '../../router/types'

import {
  SET_ROOM_DETAILS,
  CLEAR_ROOM_DETAILS,
  SEND_ANNOUNCEMENT,
} from './types'

function fetchApi(token, id) {
  return api.fetchQuestionnaires(id)(token)
    .then(handleApiErrors)
    .then(res => res.json())
}

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const action = yield take([
      navTypes.NAVIGATE_TO_ROOM_DETAILS,
      SEND_ANNOUNCEMENT,
    ])
    const state = yield select()
    const token = state.auth.token
    const id = action.id || state.roomInfo.roomInfo.id
    if (!state.roomInfo.roomInfo) {
      yield put(FetchRoomInfo(id))
    }
    switch (action.type) {
      case navTypes.NAVIGATE_TO_ROOM_DETAILS:
      case SEND_ANNOUNCEMENT:
        yield put({ type: CLEAR_ROOM_DETAILS })
        yield put({
          type: SET_ROOM_DETAILS,
          roomDetails: yield call(fetchApi, token, id),
        })
        break
      default:
    }
  }
}
