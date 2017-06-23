import { connect } from 'react-redux'
import Page from './page'

const mapStateToProps = state => ({
  title: state.newRoom.title,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
