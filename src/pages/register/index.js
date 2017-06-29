import { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GoBack, NavigateToFindPassword } from '@/router/actions'
import { SetAlert, SetAlertMessage } from '@/auth/actions'
import { registerRequest } from './actions'

import Page from './page'

const mapStateToProps = state => ({
  login: state.login,
  alert: state.auth.alert,
  messages: state.auth.messages,
})

const mapDispatchToProps = dispatch => ({
  goBackAction: bindActionCreators(GoBack, dispatch),
  toFindPassAction: bindActionCreators(NavigateToFindPassword, dispatch),
  registerAction: bindActionCreators(registerRequest, dispatch),
  setAlertAction: bindActionCreators(SetAlert, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
