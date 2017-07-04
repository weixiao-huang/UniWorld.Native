import { take, select, call, put } from 'redux-saga/effects'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import * as navTypes from '@/router/types'
import * as authTypes from '@/auth/types'
import * as meTypes from '@/pages/me/types'
import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  SET_FOLLOWED,
  FOLLOW_OR_UNFOLLOW_USER,
  FOLLOW_OR_UNFOLLOW_SUCCESS,
} from './types'

function fetchApi(token, id) {
  return api.fetchUser(id)(token)
    .then(handleApiErrors)
    .then(res => res.json())
}

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const action = yield take([
      navTypes.NAVIGATE_TO_USER_INFO,
      authTypes.FOLLOW_USER,
      authTypes.UNFOLLOW_USER,
    ])
    let isFollowed = false
    switch (action.type) {
      case navTypes.NAVIGATE_TO_USER_INFO: {
        const id = action.id
        const state = yield select()
        const token = state.auth.token
        state.me.userInfo.follows.map((user) => {
          if (user.id === id) isFollowed = true
          return user
        })
        yield put({ type: CLEAR_USER_INFO })
        yield put({ type: SET_FOLLOWED, isFollowed })
        const userInfo = yield call(fetchApi, token, id)
        yield put({ type: SET_USER_INFO, userInfo })
        break
      }
      case authTypes.UNFOLLOW_USER:
        yield put({ type: FOLLOW_OR_UNFOLLOW_USER })
        yield take(meTypes.FETCH_MY_USER_INFO_SUCCESS)
        yield put({ type: SET_FOLLOWED, isFollowed })
        yield put({ type: FOLLOW_OR_UNFOLLOW_SUCCESS })
        break
      case authTypes.FOLLOW_USER:
        isFollowed = true
        yield put({ type: FOLLOW_OR_UNFOLLOW_USER })
        yield take(meTypes.FETCH_MY_USER_INFO_SUCCESS)
        yield put({ type: SET_FOLLOWED, isFollowed })
        yield put({ type: FOLLOW_OR_UNFOLLOW_SUCCESS })
        break
      default:
    }
  }
}
