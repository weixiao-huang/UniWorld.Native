import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from './page'
import { SetNewRoomData } from '../../actions'

const mapStateToProps = state => ({
  title: state.newRoom.title,
  labels: state.newRoom.labels,
  initialLabels: state.auth.initialLabels,
})

const mapDispatchToProps = dispatch => ({
  setDataAction: bindActionCreators(SetNewRoomData, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
