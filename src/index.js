/**
 * Created by huangwx on 13/04/2017.
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import I18n from 'react-native-i18n'
import configureStore from './store'
import Languages from './common/locales'

import AppWithNavigationState from "./router";

I18n.fallbacks = true
I18n.translations = Languages

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
