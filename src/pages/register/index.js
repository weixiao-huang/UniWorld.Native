import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GoBack, NavigateToFindPassword } from '@/router/actions'

import Page from './page'

const mapStateToProps = state => ({
  login: state.login,
  alert: state.auth.alert,
  messages: state.auth.messages,
})

const mapDispatchToProps = dispatch => ({
  goBackAction: bindActionCreators(GoBack, dispatch),
  toFindPassAction: bindActionCreators(NavigateToFindPassword, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
