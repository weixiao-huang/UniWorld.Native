import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FollowUser, UnfollowUser, BlockUser, UnblockUser } from '@/auth/actions'


import Page from './page'

const mapStateToProps = state => ({
  userInfo: state.userInfo.userInfo,
  isFollowed: state.userInfo.isFollowed,
  isBlocked: state.userInfo.isBlocked,
  requesting: state.userInfo.requesting,
  myId: state.me.userInfo.id,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  followAction: bindActionCreators(FollowUser, dispatch),
  unfollowAction: bindActionCreators(UnfollowUser, dispatch),
  blockAction: bindActionCreators(BlockUser, dispatch),
  unblockAction: bindActionCreators(UnblockUser, dispatch),

})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
