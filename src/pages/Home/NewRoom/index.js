/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native'

import { Scene, Router } from 'react-native-router-flux'

import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

export default class NewRoom extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="first" component={FirstStep} title="First"/>
          <Scene key="second" component={SecondStep} title="Second" initial={true}/>
        </Scene>
      </Router>
    )
  }
}
