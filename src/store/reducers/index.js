/**
 * Created by huangwx on 13/04/2017.
 */

import { combineReducers } from 'redux'
import nav from './nav'
import user from './user'

export default combineReducers({
  nav,
  user
})
