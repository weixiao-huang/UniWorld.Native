import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from './page'
import { SetNewRoomData } from '../../actions'

const mapStateToProps = state => ({
  title: state.newRoom.title,
  labels: state.newRoom.labels,
  cover: state.newRoom.cover,
  description: state.newRoom.description,
  date_time_start: state.newRoom.date_time_start,
  date_time_end: state.newRoom.date_time_end,
  location_string: state.newRoom.location_string,
  max_participants: state.newRoom.max_participants,
  isPrivate: state.newRoom.isPrivate,
  welcome: state.newRoom.welcome,
  rewards: state.newRoom.rewards,
  expense: state.newRoom.expense,
})

const mapDispatchToProps = dispatch => ({
  setDataAction: bindActionCreators(SetNewRoomData, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
