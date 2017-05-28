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
    case types.GO_TO_HOME:
      return AppNavigator.router.getStateForAction(NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({routeName: 'Home'}) ]
      }), state)
    case types.GO_TO_LOGIN:
      return AppNavigator.router.getStateForAction(NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({routeName: 'Login'}) ]
      }), state)
    case types.GO_TO_ROOM_INFO:
      console.log("xxxxxxxxxxxxxxxxxxxxxxx")
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({
        routeName: 'RoomInfo',
        params: { id: action.id }
      }), state)
    case types.GO_TO_USER:
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({
        routeName: 'User',
        params: { id: action.id }
      }), state)
    case types.GO_TO_ROOM_DETAIL:
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({
        routeName: 'RoomDetail',
        params: { id: action.id }
      }), state)
    case types.SIGN_UP:
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({
        routeName: 'SignUp'
      }), state)
    case types.NAVIGATE:
      console.log('excute tab navigator ......',action.routeName);
    default:
      return AppNavigator.router.getStateForAction(action, state)
  }
}
