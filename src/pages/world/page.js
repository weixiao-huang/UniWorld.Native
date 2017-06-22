import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Reactotron from 'reactotron-react-native'

import Square from './components/Square'

import {
  MainView,
  EmptyView,
  MainText,
  StyledScrollTabView,
} from './style'

const styles = StyleSheet.create({
  tabBarUnderline: {
    backgroundColor: 'white',
    height: 1.5,
  },
  tabBarText: {
    // paddingTop:20,
    color: 'white',
  },
})

export default class World extends Component {
  onPress = () => {
    this.props.navigation.navigate('me')
  }
  render() {
    return (
      <MainView>
        <EmptyView />
        <StyledScrollTabView
          tabBarBackgroundColor="#ec5367"
          tabBarTextStyle={styles.tabBarText}
          tabBarUnderlineStyle={styles.tabBarUnderline}
        >
          <Square tabLabel="Square" world={this.props.world} />
        </StyledScrollTabView>
      </MainView>
    )
  }
}
