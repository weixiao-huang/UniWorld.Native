import React, { Component } from 'react'

import {
  MainScrollView,
  MainView,
  MainText,
} from './style'

export default class UserInfo extends Component {
  render() {
    return (
      <MainScrollView>
        <MainText>UserInfo</MainText>
        {this.props.userInfo && <MainView>
          <MainText>{this.props.userInfo.id}</MainText>
          <MainText>{this.props.userInfo.name}</MainText>
        </MainView>}
      </MainScrollView>
    )
  }
}
