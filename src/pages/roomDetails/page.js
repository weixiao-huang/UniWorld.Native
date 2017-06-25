import React, { Component } from 'react'

import {
  MainScrollView,
  MainView,
  MainText,
} from './style'

import Notice from './components/Notice'

export default class RoomDetails extends Component {
  render() {
    console.log(this.props.roomDetails)
    return (
      <MainScrollView>
        {this.props.roomDetails ?
        <Notice questionnaires={this.props.roomDetails.questionnaires} /> : null }
      </MainScrollView>
    )
  }
}
