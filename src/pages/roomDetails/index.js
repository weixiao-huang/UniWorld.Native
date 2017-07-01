import React from 'react'
import { connect } from 'react-redux'

import Page from './page'

const mapStateToProps = state => ({
  roomDetails: state.roomDetails.roomDetails,
  myId: state.me.userInfo.id,
  hostId: state.roomInfo.roomInfo &&
          state.roomInfo.roomInfo.host &&
          state.roomInfo.roomInfo.host.id,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
