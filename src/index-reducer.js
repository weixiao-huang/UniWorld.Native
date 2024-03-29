import { combineReducers } from 'redux'
import nav from './router/reducer'
import auth from './auth/reducer'
import login from './pages/login/reducer'
import world from './pages/world/reducer'
import newRoom from './pages/newRoom/reducer'
import myRoomList from './pages/myRoomList/reducer'
import me from './pages/me/reducer'
import roomInfo from './pages/roomInfo/reducer'
import roomDetails from './pages/roomDetails/reducer'
import userInfo from './pages/userInfo/reducer'

export default combineReducers({
  nav,
  auth,
  login,
  world,
  newRoom,
  myRoomList,
  me,
  roomInfo,
  roomDetails,
  userInfo,
})
