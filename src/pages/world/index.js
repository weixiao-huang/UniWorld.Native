import React from 'react'
import { connect } from 'react-redux'

import Page from './page'

const mapStateToProps = state => ({
  world: state.getIn(['world', 'world']),
  latest: state.getIn(['world', 'latest']),
  recommend: state.getIn(['world', 'recommend']),
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
