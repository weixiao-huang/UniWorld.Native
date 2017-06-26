import React from 'react'
import { connect } from 'react-redux'

import Page from './page'

const mapStateToProps = state => ({
  roomDetails: state.roomDetails.roomDetails,
  myId: state.me.userInfo.id,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
