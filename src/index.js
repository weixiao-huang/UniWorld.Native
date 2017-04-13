/**
 * Created by huangwx on 13/04/2017.
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

import AppWithNavigationState, { AppNavigator } from "./router";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      store: configureStore(() => {
        this.setState({ isLoading: false })
      })
    }
  }

  render() {
    if (this.state.isLoading) {
      console.log('loading app')
      return null
    }
    return (
      <Provider store={this.state.store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}
