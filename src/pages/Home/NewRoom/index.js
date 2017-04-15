/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

export default StackNavigator({
  first: {
    screen: FirstStep,
    navigationOptions: {
      title: 'First'
    }
  },
  next: {
    path: 'second',
    screen: SecondStep,
    navigationOptions: {
      title: 'First'
    }
  },
})

