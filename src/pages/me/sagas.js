import { take, select, call, put } from 'redux-saga/effects'
import { SetAlert } from '@/auth/actions'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import * as authTypes from '@/auth/types'

import {
  SET_MY_USER_INFO,
  PUT_MY_USER_INFO,
  FETCH_MY_USER_INFO,
  FETCH_MY_USER_INFO_SUCCESS,
} from './types'

const fetchApi = token => api.fetchUserInfo(token)
  .then(handleApiErrors)
  .then(res => res.json())

const putApi = (data, token) => api.editUserInfo(data)(token)
  .then(handleApiErrors)
  .then(res => res.json())

const index = 3

export default function* () {
  let action = yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    try {
      if ((state.nav.routes[0].routeName === 'homeTab' &&
          state.nav.routes[0].index === index &&
          !state.me.userInfo) ||
          action.type === FETCH_MY_USER_INFO ||
          action.type === authTypes.FOLLOW_USER ||
          action.type === authTypes.UNFOLLOW_USER
      ) {
        const token = state.auth.token
        const userInfo = yield call(fetchApi, token)
        yield put({ type: SET_MY_USER_INFO, userInfo })
        yield put({ type: FETCH_MY_USER_INFO_SUCCESS })
      } else if (action.type === PUT_MY_USER_INFO) {
        const token = state.auth.token
        const {
          department, gender, name, signature, year,
        } = yield call(putApi, action.userInfo, token)
        yield put({
          type: SET_MY_USER_INFO,
          userInfo: {
            ...state.me.userInfo,
            department,
            gender,
            name,
            signature,
            year,
          },
        })
      }
    } catch (error) {
      // Error handle
      console.log('fetch my room list error: ', error.message)
      if (error.message === '401') yield put(SetAlert(true))
    }
    action = yield take('*')
  }
}
