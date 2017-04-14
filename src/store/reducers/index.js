/**
 * Created by huangwx on 13/04/2017.
 */

import { combineReducers } from 'redux'
import nav from './nav'
import auth from './auth'
import user from './user'
import room from './room'

export default combineReducers({
  nav,
  auth,
  user,
  room
})
