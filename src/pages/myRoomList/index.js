import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GoBack, ResetToLogin } from '@/router/actions'
import { SetAlert } from '@/auth/actions'

import Page from './page'

const mapStateToProps = state => ({
  roomList: state.myRoomList.roomList,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  goBackAction: bindActionCreators(GoBack, dispatch),
  resetToLoginAction: bindActionCreators(ResetToLogin, dispatch),
  setAlertAction: bindActionCreators(SetAlert, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
