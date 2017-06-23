import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigateToUserInfo } from '@/router/actions'

import Page from './page'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  navigateAction: bindActionCreators(NavigateToUserInfo, dispatch),
})


Page.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
}

Page.defaultProps = {
  size: 70,
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
