import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { LeaveRoom, FetchParticipants } from '@/pages/roomInfo/actions'
import { FetchWorld } from '@/pages/world/actions'
import Page from './page'

const mapStateToProps = state => ({
  participants: state.roomInfo.roomInfo &&
                state.roomInfo.participants,
  id: state.roomInfo.roomInfo &&
                state.roomInfo.roomInfo.id,
})

const mapDispatchToProps = dispatch => ({
  leaveRoomAction: bindActionCreators(LeaveRoom, dispatch),
  fetchParticipantsAction: bindActionCreators(FetchParticipants, dispatch),
  fetchWorldAction: bindActionCreators(FetchWorld, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
