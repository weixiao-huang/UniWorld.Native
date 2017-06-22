import React from 'react'
import { connect } from 'react-redux'

import Page from './page'

const mapStateToProps = state => ({
  world: state.world.world,
  latest: state.world.latest,
  recommend: state.world.recommend,
  posters: state.world.posters,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})


export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
