import React, { Component, PropTypes } from 'react'
import ScrollTabView from 'react-native-scrollable-tab-view'

import {
  MainView,
  PlaceholderView,
} from './style'

import UserCover from './components/UserCover'
import UserInfo from './components/UserInfo/'
import Follow from './components/Follow/'
import Reputation from './components/Reputation/'

export default class Me extends Component {
  render() {
    console.log('userInfo', this.props.userInfo)
    return (
      <MainView>
        <UserCover userInfo={this.props.userInfo} />
        {this.props.userInfo ?
          <ScrollTabView style={{ flex: 2 }}>
            <UserInfo tabLabel={'Info'} />
            <Follow
              tabLabel={'Follow'}
              follows={this.props.userInfo.follows}
            />
            <Reputation
              tabLabel={'Reputation'}
              thumbUps={this.props.userInfo.p_thumb_ups}
              thumbDowns={this.props.userInfo.p_thumb_downs}
            />
          </ScrollTabView> :
          <PlaceholderView style={{ flex: 2 }}>

          </PlaceholderView>
        }
      </MainView>
    )
  }
}
