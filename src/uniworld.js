import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppState } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import AppWithNavigationState from './router'
import {
  POST_UNREAD_COUNT,
} from './auth/types'

const isBack = appState => appState.match(/inactive|background/)

@connect(() => ({}), dispatch => ({ dispatch }))
export default class UniWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appState: AppState.currentState,
    }
  }
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    SplashScreen.hide()
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState) => {
    if (isBack(this.state.appState) && !isBack(nextAppState)) {
      console.log('App has come to the foreground!')
    } else if (!isBack(this.state.appState) && isBack(nextAppState)) {
      console.log('App has come to the background!')
      this.props.dispatch({ type: POST_UNREAD_COUNT })
    }
    this.setState({ appState: nextAppState });
  }

  render() {
    return (
      <AppWithNavigationState />
    )
  }
}
