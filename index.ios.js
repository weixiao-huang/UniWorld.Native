/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Home from './src/pages/Login'

export default class UniWorld extends Component {
  render() {
    return <Home/>
  }
}

AppRegistry.registerComponent('UniWorld', () => UniWorld)
