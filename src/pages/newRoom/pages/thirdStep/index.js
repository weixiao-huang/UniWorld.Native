import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigateToRoomInfo } from '@/router/actions'
import { CreateNewRoom } from '../../actions'
import Page from './page'

const mapStateToProps = state => ({
  newRoom: state.newRoom,
  initialLabels: state.auth.initialLabels.children[1].children,
})

const mapDispatchToProps = dispatch => ({
  createRoomAction: bindActionCreators(CreateNewRoom, dispatch),
  navigateAction: bindActionCreators(NavigateToRoomInfo, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
