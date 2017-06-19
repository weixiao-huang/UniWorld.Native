import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { loginRequest } from './actions'

import Page from './page'

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = (dispatch) => {
  const loginAction = bindActionCreators(loginRequest, dispatch)
  return { loginAction }
}

export default reduxForm({
  form: 'login',
})(connect(mapStateToProps, mapDispatchToProps)(Page))
