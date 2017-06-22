import React, { Component, PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Reactotron from 'reactotron-react-native'

import Square from './components/Square'

import {
  MainView,
  MainText,
  StyledScrollTabView,
} from './style'

export default class World extends Component {
  onPress = () => {
    this.props.navigation.navigate('me')
  }
  render() {
    return (
      <MainView>
        <MainText>This is World Page</MainText>
        <TouchableOpacity onPress={this.onPress}>
          <MainText>Test</MainText>
        </TouchableOpacity>
        <StyledScrollTabView
          tabBarBackgroundColor="#ec5367"
        >
          <Square tabLabel="Square" world={this.props.world} />
        </StyledScrollTabView>
      </MainView>
    )
  }
}
