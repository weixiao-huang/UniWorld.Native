import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  NavigateToRoomInfo,
} from '@/router/actions'
import Page from './page'

const mapStateToProps = state => ({
  participants: state.roomInfo.roomInfo &&
                state.roomInfo.roomInfo.participants,
  id: state.roomInfo.roomInfo &&
                state.roomInfo.roomInfo.id,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
