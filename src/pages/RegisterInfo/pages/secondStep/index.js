import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PutMyUserInfo } from '@/pages/me/actions'

import Page from './page'

const mapStateToProps = state => ({
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  putAction: bindActionCreators(PutMyUserInfo, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
