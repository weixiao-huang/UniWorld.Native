import React, { Component, PropTypes } from 'react'

import {
  MainView,
  PlaceholderView,
  StyledScrollTabView,
} from './style'

import UserCover from './components/UserCover'
import UserInfo from './components/UserInfo/'
import Follow from './components/Follow/'
import Reputation from './components/Reputation/'

export default class Me extends Component {
  render() {
    return (
      <MainView>
        <UserCover userInfo={this.props.userInfo} />
        {this.props.userInfo ?
          <StyledScrollTabView>
            <UserInfo
              tabLabel={'Info'}
              userInfo={this.props.userInfo}
            />
            <Follow
              tabLabel={'Follow'}
              follows={this.props.userInfo.follows}
            />
            <Reputation
              tabLabel={'Reputation'}
              thumbUps={this.props.userInfo.p_thumb_ups}
              thumbDowns={this.props.userInfo.p_thumb_downs}
            />
          </StyledScrollTabView> :
          <PlaceholderView />
        }
      </MainView>
    )
  }
}
