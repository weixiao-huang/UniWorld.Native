/**
 * Created by ZZF on 2017/5/22.
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import { Text } from 'react-native'

import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'

const Router = StackNavigator({
  First: {
    screen: FirstPage,
    navigationOptions: {
      title: 'First'
    }
  },
  Second: {
    screen: SecondPage,
    navigationOptions: {
      title: 'Second'
    }
  },
  Third: {
    screen: ThirdPage,
    navigationOptions: {
      title: 'Third'
    }
  },
}, {
  headerMode: 'screen',
  initialState: 'First1'
})

export default (props) => (
  <Router />
)
