import { take, select, call, put } from 'redux-saga/effects'
import { SetAlert } from '@/auth/actions'

import api from '@/api'

import { handleApiErrors } from '@/lib/api-errors'

import * as navTypes from '@/router/types'

import {
  SET_MY_USER_INFO,
  PUT_MY_USER_INFO,
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
    if (state.nav.routes[0].routeName === 'homeTab' &&
        state.nav.routes[0].index === index &&
        (!state.me.userInfo || action.type === PUT_MY_USER_INFO)
    ) {
      // TODO: fetch data and add them into reducer
      try {
        const token = state.auth.token
        if (!state.me.userInfo) {
          const data = yield call(fetchApi, token)
          yield put({
            type: SET_MY_USER_INFO,
            userInfo: data,
          })
        } else {
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
        // const data = !state.me.userInfo ?
        //   yield call(fetchApi, token) :
        //   yield call(putApi, action.userInfo, token)
        // yield put({
        //   type: SET_MY_USER_INFO,
        //   userInfo: data,
        // })
      } catch (error) {
        // Error handle
        console.log('fetch my room list error: ', error.message)
        if (error.message === '401') yield put(SetAlert(true))
      }
    }
    action = yield take('*')
  }
}
