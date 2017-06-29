import { take, fork, cancel, call, put, cancelled, select } from 'redux-saga/effects'
import Reactotron from 'reactotron-react-native'

import { handleApiErrors } from '@/lib/api-errors'

import {
  SetAlertMessage,
} from '@/auth/actions'

import * as authTypes from '@/auth/types'
import * as navTypes from '@/router/types'
import * as types from '@/types'

import api from '@/api'

import {
  REGISTER_REQUEST,
} from './types'

function registerByIdCard(data) {
  return api.uploadIdCard(data)
    .then(handleApiErrors)
}

function registerByEmail(data) {
  return api.Register(data)
    .then(handleApiErrors)
}

function* registerApi(data) {
  const uploadData = data
  try {
    if (data.emailAuth) {
      yield call(registerByEmail, uploadData)
    } else {
      delete uploadData.email
      yield call(registerByIdCard, uploadData)
    }
  } catch (error) {
    // Error handle
    console.log('register error: ', error.message)
  }
}

export default function* registerPageWatch() {
  console.log(3)
  yield take('persist/REHYDRATE')
  console.log(2)
  while (true) {
    try {
      const action = yield take(REGISTER_REQUEST)
      yield call(registerApi, action.data)
      console.log(1)
    } catch (error) {
      // Error handle
      console.log('register error: ', error.message)
    }
  }
}
