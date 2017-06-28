import React, { Component } from 'react'

import {
  MainView,
  MainText,
} from './style'

import AvatarBox from './components/AvatarBox'

export default class Member extends Component {
  render() {
    return (
      <MainView>
        <AvatarBox participants={this.props.participants} />
      </MainView>
    )
  }
}
