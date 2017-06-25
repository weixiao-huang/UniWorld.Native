import { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigateToFindPassword } from '@/router/actions'
import { loginRequest } from './actions'

import Page from './page'

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch => ({
  toFindPassAction: bindActionCreators(NavigateToFindPassword, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
