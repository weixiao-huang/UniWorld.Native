import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginRequest, fetchUserInfo } from './actions'

import Page from './page'

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = (dispatch) => {
  const loginAction = bindActionCreators(loginRequest, dispatch)
  const fetchUserInfoAction = bindActionCreators(fetchUserInfo, dispatch)
  return { loginAction, fetchUserInfoAction }
}

// export default reduxForm({
//   form: 'login',
// })(connect(mapStateToProps, mapDispatchToProps)(Page))

export default connect(mapStateToProps, mapDispatchToProps)(Page)
