import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { SendMessage } from '@/auth/actions'

import Page from './page'

const mapStateToProps = state => ({
  messages: state.roomInfo.roomInfo &&
            state.auth.messages[state.roomInfo.roomInfo.id],
  myId: state.me.userInfo.id,
  roomId: state.roomInfo.roomInfo &&
          state.roomInfo.roomInfo.id,
})

const mapDispatchToProps = dispatch => ({
  sendAction: bindActionCreators(SendMessage, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
