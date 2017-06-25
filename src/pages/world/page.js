import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Reactotron from 'reactotron-react-native'
import EmptyHeader from '@/components/EmptyHeader'
import Square from './components/Square'


import {
  MainView,
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
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <EmptyHeader />
        <StyledScrollTabView
          tabBarBackgroundColor="#ec5367"
          tabBarTextStyle={styles.tabBarText}
          tabBarUnderlineStyle={styles.tabBarUnderline}
        >
          <Square
            tabLabel="Square"
            world={this.props.world}
            latest={this.props.latest}
            recommend={this.props.recommend}
            posters={this.props.posters}
          />
        </StyledScrollTabView>
      </MainView>
    )
  }
}
