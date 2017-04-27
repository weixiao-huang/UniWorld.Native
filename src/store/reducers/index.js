/**
 * Created by huangwx on 13/04/2017.
 */

import { combineReducers } from 'redux'
import newRoom from './newRoom'
import nav from './nav'
import auth from './auth'
import user from './user'
import room from './room'
import initial from './initial'
import common from './common'

export default combineReducers({
  nav,
  auth,
  user,
  room,
  initial,
  newRoom,
  common
})
