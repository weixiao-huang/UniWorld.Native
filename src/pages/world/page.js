import React, { Component } from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import I18n from '@/locales'
import EmptyHeader from '@/components/EmptyHeader'
import Square from './pages/Square'
import Search from './pages/Search'

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
          contentProps={{ keyboardShouldPersistTaps: 'handled' }}
        >
          <Square tabLabel={I18n.t('World.Square.label')} />
          <Search tabLabel={I18n.t('World.Search.label')} />
        </StyledScrollTabView>
      </MainView>
    )
  }
}
