import { take, fork, cancel, call, put, cancelled, select } from 'redux-saga/effects'
import Reactotron from 'reactotron-react-native'

import { handleApiErrors } from '@/lib/api-errors'

import {
  setClient,
  unSetClient,
} from '@/auth/actions'

import * as authTypes from '@/auth/types'
import * as navTypes from '@/router/types'
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

function fetchInitialApi(token) {
  return api.fetchInitialLabels(token)
    .then(handleApiErrors)
    .then(res => res.json())
}

function* logout() {
  yield put(unSetClient())
  // AsyncStorage.removeItem('token')
  yield put({ type: navTypes.RESET_TO_LOGIN })
  yield put({ type: types.CLEAR_DATA })
  yield put({ type: LOGOUT_SUCCESS })
}

function* loginFlow(username, password) {
  let token
  try {
    const data = yield call(loginApi, username, password)
    token = data.token
    yield put(setClient(token))
    const initialLabels = yield call(fetchInitialApi, token)
    yield put({ type: authTypes.SET_INITIAL_LABELS, initialLabels })
    yield put({ type: LOGIN_SUCCESS })
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
    if (!state.auth.token) {
      const { username, password } = yield take(LOGIN_REQUEST)
      const task = yield fork(loginFlow, username, password)
      const action = yield take([authTypes.CLIENT_UNSET, LOGIN_ERROR, LOGOUT_REQUEST])
      if (action.type === authTypes.CLIENT_UNSET) yield cancel(task)
      yield call(logout)
    } else {
      yield take([authTypes.CLIENT_UNSET, LOGIN_ERROR, LOGOUT_REQUEST])
      yield call(logout)
    }
  }
}
