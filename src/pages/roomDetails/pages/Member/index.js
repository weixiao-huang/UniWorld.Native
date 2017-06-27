import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { logoutRequest } from '@/pages/login/actions'

import Page from './page'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  dispatch,
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
