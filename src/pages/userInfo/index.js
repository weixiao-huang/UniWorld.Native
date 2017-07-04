import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FollowUser, UnfollowUser } from '@/auth/actions'


import Page from './page'

const mapStateToProps = state => ({
  userInfo: state.userInfo.userInfo,
  isFollowed: state.userInfo.isFollowed,
  requesting: state.userInfo.requesting
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  followAction: bindActionCreators(FollowUser, dispatch),
  unfollowAction: bindActionCreators(UnfollowUser, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
