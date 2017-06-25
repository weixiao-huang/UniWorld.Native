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
    const { roomDetails } = this.props
    return (
      <MainScrollView>
        {roomDetails ?
          <Notice
            questionnaires={roomDetails.questionnaires}
          /> : null }
      </MainScrollView>
    )
  }
}
