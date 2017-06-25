import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ResetToLogin } from '@/router/actions'

import Page from './page'

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch => ({
  resetToLoginAction: bindActionCreators(ResetToLogin, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
