import React, { Component } from 'react'

import {
  MainScrollView,
  MainText,
} from './style'

import AvatarBox from './components/AvatarBox'

export default class Member extends Component {
  render() {
    return (
      <MainScrollView>
        <AvatarBox participants={this.props.participants} />
      </MainScrollView>
    )
  }
}
