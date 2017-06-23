import { connect } from 'react-redux'
import Page from './page'

const mapStateToProps = state => ({
  title: state.newRoom.title,
  labels: state.newRoom.labels,
  initialLabels: state.auth.initialLabels
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
