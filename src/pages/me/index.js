import React from 'react'
import { connect } from 'react-redux'

import Page from './page'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  dispatch,
})


export default connect(mapStateToProps, mapDispatchToProps)(() => (
  <Page {...this.props} />
))
