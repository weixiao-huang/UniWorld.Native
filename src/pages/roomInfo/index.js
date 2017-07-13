import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigateToRoomDetails } from '@/router/actions'
import { FollowUser, UnfollowUser } from '@/auth/actions'

import Page from './page'

const mapStateToProps = state => ({
  roomInfo: state.roomInfo.roomInfo,
  isJoined: state.roomInfo.isJoined,
  isMarked: state.roomInfo.isMarked,
  hostFollowed: state.roomInfo.hostFollowed,
  followRequesting: state.roomInfo.followRequesting,
  token: state.auth.token,
  myId: state.me.userInfo && state.me.userInfo.id,
  participants: state.roomInfo.participants,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  navigateAction: bindActionCreators(NavigateToRoomDetails, dispatch),
  followAction: bindActionCreators(FollowUser, dispatch),
  unfollowAction: bindActionCreators(UnfollowUser, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
