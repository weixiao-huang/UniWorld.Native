import { all, fork } from 'redux-saga/effects'
import LoginSage from './pages/login/sagas'
import WorldSaga from './pages/world/sagas'
import MyRoomListSaga from './pages/myRoomList/sagas'
import MeSaga from './pages/me/sagas'
import RoomInfoSaga from './pages/roomInfo/sagas'

export default function* IndexSaga() {
  yield all([
    fork(LoginSage),
    fork(WorldSaga),
    fork(MyRoomListSaga),
    fork(MeSaga),
    fork(RoomInfoSaga),
  ])
}
