import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GoBack, ResetToLogin } from '@/router/actions'
import { SetAlert } from '@/auth/actions'

import Page from './page'

const mapStateToProps = state => ({
  userInfo: state.me.userInfo,
  alert: state.auth.alert,
})

const mapDispatchToProps = dispatch => ({
  goBackAction: bindActionCreators(GoBack, dispatch),
  resetToLoginAction: bindActionCreators(ResetToLogin, dispatch),
  setAlertAction: bindActionCreators(SetAlert, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
