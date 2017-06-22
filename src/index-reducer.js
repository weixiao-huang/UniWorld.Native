import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import nav from './router/reducer'
import auth from './auth/reducer'
import login from './pages/login/reducer'
import world from './pages/world/reducer'
import myRoomList from './pages/myRoomList/reducer'
import me from './pages/me/reducer'

export default combineReducers({
  nav,
  auth,
  form,
  login,
  world,
  myRoomList,
  me,
})
