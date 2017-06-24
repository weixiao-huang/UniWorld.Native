import { NavigationActions } from 'react-navigation'
import * as types from './types'

import AppNavigator from './page'

// const tabbarAction = AppNavigator.router.getActionForPathAndParams('homeTab');
// const tempNavState = AppNavigator.router.getStateForAction(tabbarAction);
// const loginAction = AppNavigator.router.getActionForPathAndParams('login');

// const initialNavState = AppNavigator.router.getstateforaction(
//   loginAction,
//   tempNavState,
// );

export default (state, action) => {
  let nextState;
  switch (action.type) {
    case types.RESET_TO_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'login' })],
        }),
        state,
      )
      break
    case types.RESET_TO_HOME:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'homeTab' })],
        }),
        state,
      )
      break
    case types.NAVIGATE_TO_ROOM_INFO:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'roomInfo',
          params: { id: action.id },
        }),
        state,
      )
      break
    case types.NAVIGATE_TO_ROOM_DETAILS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'roomDetails',
          params: { id: action.id },
        }),
        state,
      )
      break
    case types.NAVIGATE_TO_USER_INFO:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'userInfo',
          params: { id: action.id },
        }),
        state,
      )
      break
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break
  }
  return nextState || state;
};
