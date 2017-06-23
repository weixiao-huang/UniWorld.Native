import React, { Component } from 'react'

import {
  MainScrollView,
  MainView,
  MainText,
} from './style'

export default class RoomInfo extends Component {
  render() {
    return (
      <MainScrollView>
        <MainText>RoomInfo</MainText>
        {this.props.roomInfo && <MainView>
          <MainText>{this.props.roomInfo.id}</MainText>
          <MainText>{this.props.roomInfo.title}</MainText>
        </MainView>}
      </MainScrollView>
    )
  }
}
