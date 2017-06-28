import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logoutRequest } from '@/pages/login/actions'
import { PutMyUserInfo } from '../../actions'

import Page from './page'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  logoutAction: bindActionCreators(logoutRequest, dispatch),
  putAction: bindActionCreators(PutMyUserInfo, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
