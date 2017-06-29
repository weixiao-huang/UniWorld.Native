import { all, fork } from 'redux-saga/effects'
import AuthSaga from './auth/sagas'
import LoginSage from './pages/login/sagas'
import RegisterSaga from './pages/register/sagas'
import WorldSaga from './pages/world/sagas'
import NewRoomSaga from './pages/newRoom/sagas'
import MyRoomListSaga from './pages/myRoomList/sagas'
import MeSaga from './pages/me/sagas'
import RoomInfoSaga from './pages/roomInfo/sagas'
import RoomDetailsSaga from './pages/roomDetails/sagas'
import UserInfoSaga from './pages/userInfo/sagas'

export default function* IndexSaga() {
  yield all([
    fork(AuthSaga),
    fork(LoginSage),
    fork(RegisterSaga),
    fork(WorldSaga),
    fork(NewRoomSaga),
    fork(MyRoomListSaga),
    fork(MeSaga),
    fork(RoomInfoSaga),
    fork(RoomDetailsSaga),
    fork(UserInfoSaga),
  ])
}
