/**
 * Created by huangwx on 13/04/2017.
 */

import { NavigationActions } from 'react-navigation'
import * as types from '../types'
import { AppNavigator } from '../../router'

// const initialState = {
//   index: 1,
//   routes: [
//     { key: 'Login', routeName: 'Login' },
//     { key: 'Home', routeName: 'Home' },
//   ],
// }

export default (state, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
    case types.USER_LOGOUT:
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state);
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}
