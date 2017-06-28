import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FetchMyRoomList } from '../../actions'

import Page from './page'

const mapStateToProps = state => ({
  token: state.auth.token,
  refreshing: state.myRoomList.refreshing,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchAction: bindActionCreators(FetchMyRoomList, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
