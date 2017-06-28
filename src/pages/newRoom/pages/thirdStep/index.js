import { connect } from 'react-redux'
import Page from './page'

const mapStateToProps = state => ({
  newRoom: state.newRoom,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
