import React, { Component } from 'react'

import {
  MainScrollView,
  MainView,
  MainText,
} from './style'

import UserCover from './components/UserCover'

export default class UserInfo extends Component {
  render() {
    // const { name, signature, thumb_ups, thumb_downs, followers, follows } = this.props.user
    // const { avatar_thumbnail, gender, avatar } = this.props.user
    console.log(this.props)
    return (
      <MainScrollView>
        <MainView>
          <UserCover userInfo={this.props.userInfo} />
        </MainView>
      </MainScrollView>
    )
  }
}
