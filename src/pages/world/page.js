import React, { Component, PropTypes } from 'react'

import {
  MainView,
  MainText
} from './style'

export default class World extends Component {
  render() {
    return (
      <MainView>
        <MainText>This is World Page</MainText>
      </MainView>
    )
  }
}
