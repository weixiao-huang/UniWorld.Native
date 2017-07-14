import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigateToUserInfo, ResetToLogin } from '@/router/actions'

import Page from './page'

const mapStateToProps = state => ({
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  navigateAction: bindActionCreators(NavigateToUserInfo, dispatch),
  resetToLoginAction: bindActionCreators(ResetToLogin, dispatch),
})


Page.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  size: PropTypes.number,
  navigateAction: PropTypes.func.isRequired,
  resetToLoginAction: PropTypes.func.isRequired,
}

Page.defaultProps = {
  size: 70,
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
