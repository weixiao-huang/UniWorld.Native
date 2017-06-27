import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigateToRoomDetails } from '@/router/actions'

import Page from './page'

const mapStateToProps = state => ({
  roomInfo: state.roomInfo.roomInfo,
  isJoined: state.roomInfo.isJoined,
  isMarked: state.roomInfo.isMarked,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  navigateAction: bindActionCreators(NavigateToRoomDetails, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
