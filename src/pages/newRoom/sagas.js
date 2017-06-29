import { take, select, put } from 'redux-saga/effects'
import { SetAlert } from '@/auth/actions'

const index = 1

export default function* () {
  yield take('persist/REHYDRATE')
  while (true) {
    const state = yield select()
    if (state.nav.routes[0].routeName === 'homeTab' &&
        state.nav.routes[0].index === index &&
        !state.auth.token
    ) yield put(SetAlert(true))
    yield take('*')
  }
}
