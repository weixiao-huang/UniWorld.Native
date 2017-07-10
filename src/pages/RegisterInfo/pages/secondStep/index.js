import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ResetToHome } from '@/router/actions'
import { PutMyUserInfo } from '@/pages/me/actions'

import Page from './page'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  resetToHomeAction: bindActionCreators(ResetToHome, dispatch),
  putAction: bindActionCreators(PutMyUserInfo, dispatch),

})


export default connect(mapStateToProps, mapDispatchToProps)(Page)

