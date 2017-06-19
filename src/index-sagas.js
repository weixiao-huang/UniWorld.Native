import LoginSage from './pages/login/sagas'

export default function* IndexSaga() {
  yield [
    LoginSage(),
  ]
}
