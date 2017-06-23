import { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginRequest } from './actions'

import Page from './page'

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = (dispatch) => {
  const loginAction = bindActionCreators(loginRequest, dispatch)
  return { loginAction }
}

Page.propTypes = {
  login: PropTypes.shape({
    requesting: PropTypes.bool.isRequired,
    successful: PropTypes.bool.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string.isRequired,
        time: PropTypes.instanceOf(Date).isRequired,
      }),
    ),
    errors: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string.isRequired,
        time: PropTypes.instanceOf(Date).isRequired,
      }),
    ),
  }).isRequired,
  loginAction: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
