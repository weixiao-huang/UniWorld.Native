import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import Reactotron from 'reactotron-react-native'
import { AsyncStorage } from 'react-native'

import { handleApiErrors } from '../../lib/api-errors'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './types'

import * as navTypes from '../../router/types'

import api from '../../api'

function loginApi(username, password) {
  return api.userLogin({ username, password })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(data => AsyncStorage.setItem('token', data.token))
}

function* loginFlow(username, password) {
  let token
  try {
    token = yield call(loginApi, username, password)
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
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST)
    const task = yield fork(loginFlow, username, password)
  }
}
