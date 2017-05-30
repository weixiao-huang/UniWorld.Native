/**
 * Created by huangwx on 12/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import RoomInfo from '../components/RoomInfo'
import RoomDetail from '../components/RoomDetail'
import User from '../components/User'
import SignInfo from '../pages/New'

const AppRouteConfigs = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  SignInfo: {
    screen: SignInfo,
    navigationOptions: {
      title: 'SignInfo'
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'SignUp'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'UniWorld'
    }
  },
  RoomInfo: {
    screen: RoomInfo,
    path: 'room/:id',
    navigationOptions: {
      title: 'RoomInfo'
    }
  },
  User: {
    screen: User,
    path: 'user/:id',
    navigationOptions: {
      title: 'User'
    }
  },
  RoomDetail: {
    screen: RoomDetail,
    path: 'room/:id/detail',
    navigationOptions: {
      title: 'RoomDetail'
    }
  }
}
const stackNavConfigs = {
  headerMode: 'none',
  initialRouteName: 'Login'
}

export const AppNavigator = StackNavigator(AppRouteConfigs, stackNavConfigs)

@connect(state => ({ nav: state.nav, auth: state.auth }), dispatch => ({ dispatch }))
export default class AppWithNavigationState extends Component {
  // static propTypes = {
  //   dispatch: PropTypes.func.isRequired,
  //   nav: PropTypes.object.isRequired
  // }

  componentWillMount() {
    const { auth: { isLoggedIn, token }, dispatch } = this.props
    if (isLoggedIn && token) {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({routeName: 'Home'}) ]
      }))
    } else {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({routeName: 'Login'}) ]
      }))
    }
  }

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    )
  }
}


