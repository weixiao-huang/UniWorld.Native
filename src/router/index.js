/**
 * Created by huangwx on 12/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import Login from '../pages/Login'
import Home from '../pages/Home'

const AppRouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'UniWorld'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
}
const stackNavConfigs = {
  headerMode: 'none',
  initialRouteName: 'Login'
}

export const AppNavigator = StackNavigator(AppRouteConfigs, stackNavConfigs)

@connect(state => ({ nav: state.nav }))
export default class AppWithNavigationState extends Component {
  // static propTypes = {
  //   dispatch: PropTypes.func.isRequired,
  //   nav: PropTypes.object.isRequired
  // }

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


