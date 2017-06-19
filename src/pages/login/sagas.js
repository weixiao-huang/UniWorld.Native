import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import Reactotron from 'reactotron-react-native'

import { handleApiErrors } from '../../lib/api-errors'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './types'

import {
  setClient,
  unSetClient,
} from '../../auth/actions'

import * as navTypes from '../../router/types'
import * as authTypes from '../../auth/types'

import api from '../../api'

function loginApi(username, password) {
  return api.userLogin({ username, password })
    .then(handleApiErrors)
    .then(response => response.json())
    // .then(data => AsyncStorage.setItem('token', data.token))
}

function* logout() {
  yield put(unSetClient())
  // AsyncStorage.removeItem('token')
  yield put({ type: navTypes.RESET_TO_LOGIN })
}

function* loginFlow(username, password) {
  let token
  try {
    const data = yield call(loginApi, username, password)
    token = data.token
    yield put(setClient(token))
    yield put({ type: LOGIN_SUCCESS })
    yield put({ type: navTypes.RESET_TO_HOME })
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error })
  } finally {
    if (yield cancelled()) {
      console.log('cancelled')
      yield put({ type: navTypes.RESET_TO_LOGIN })
    }
  }
  return token
}

export default function* loginWatch() {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST)
    const task = yield fork(loginFlow, username, password)
    const action = yield take([authTypes.CLIENT_UNSET, LOGIN_ERROR])
    if (action.type === authTypes.CLIENT_UNSET) yield cancel(task)
    yield call(logout)
  }
}
