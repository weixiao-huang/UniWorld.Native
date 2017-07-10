import { take, fork, cancel, call, put, cancelled, select } from 'redux-saga/effects'
import Reactotron from 'reactotron-react-native'

import { handleApiErrors } from '@/lib/api-errors'

import {
  setClient,
  unSetClient,
  PostDeviceToken,
  LogoutDeviceToken,
} from '@/auth/actions'

import * as authTypes from '@/auth/types'
import * as navTypes from '@/router/types'
import * as meTypes from '@/pages/me/types'
import * as types from '@/types'

import api from '@/api'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from './types'

function loginApi(username, password) {
  return api.userLogin({ username, password })
    .then(handleApiErrors)
    .then(response => response.json())
    // .then(data => AsyncStorage.setItem('token', data.token))
}

const fetchInitialApi = token => api.fetchInitialLabels(token)
  .then(handleApiErrors)
  .then(res => res.json())

function* logout() {
  yield put(LogoutDeviceToken())
  yield put(unSetClient())
  // AsyncStorage.removeItem('token')
  yield put({ type: navTypes.RESET_TO_LOGIN })
  yield put({ type: types.CLEAR_DATA })
  yield put({ type: LOGOUT_SUCCESS })
}

function* loginFlow(username, password) {
  let token
  try {
    // get token
    const data = yield call(loginApi, username, password)
    token = data.token
    // set token into redux
    yield put(setClient(token))
    // initial websocket
    yield put({ type: authTypes.INITIAL_WEBSOCKET })
    // fetch initial labels
    const initialLabels = yield call(fetchInitialApi, token)
    // fetch my user info request
    yield put({ type: meTypes.FETCH_MY_USER_INFO })
    // fetch my user info success
    yield take(meTypes.FETCH_MY_USER_INFO_SUCCESS)
    // set initial labels
    yield put({ type: authTypes.SET_INITIAL_LABELS, initialLabels })
    // post device token
    yield put(PostDeviceToken())
    // login success
    yield put({ type: LOGIN_SUCCESS })
    // reset to login
    yield put({ type: navTypes.RESET_TO_HOME })
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error })
  } finally {
    if (yield cancelled()) {
      yield put({ type: navTypes.RESET_TO_LOGIN })
    }
  }
  return token
}

export default function* loginWatch() {
  yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    if (state.login.requesting && !state.login.successful) {
      const error = 'login interrupted while requesting'
      yield put({ type: LOGIN_ERROR, error })
    }
    if (!state.auth.token) {
      const { username, password } = yield take(LOGIN_REQUEST)
      const task = yield fork(loginFlow, username, password)
      const action = yield take([
        authTypes.CLIENT_UNSET,
        LOGIN_ERROR,
        LOGOUT_REQUEST,
      ])
      if (action.type === authTypes.CLIENT_UNSET) yield cancel(task)
      yield call(logout)
    } else {
      yield take([authTypes.CLIENT_UNSET, LOGIN_ERROR, LOGOUT_REQUEST])
      yield call(logout)
    }
  }
}
