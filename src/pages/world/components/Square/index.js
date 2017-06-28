import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FetchWorld } from '../../actions'

import Page from './page'

const mapStateToProps = state => ({
  world: state.world.world,
  latest: state.world.latest,
  recommend: state.world.recommend,
  posters: state.world.posters,
  refreshing: state.world.refreshing,
})

const mapDispatchToProps = dispatch => ({
  fetchWorldAction: bindActionCreators(FetchWorld, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Page {...props} />
))
