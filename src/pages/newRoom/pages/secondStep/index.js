import { connect } from 'react-redux'
import Page from './page'

const mapStateToProps = state => ({
  title: state.newRoom.title,
  labels: state.newRoom.labels,
  cover: state.newRoom.cover,
  description: state.newRoom.description,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
