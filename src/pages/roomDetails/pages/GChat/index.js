import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { SendMessage } from '@/auth/actions'
import Page from './page'

const mapStateToProps = state => ({
  messages: state.roomInfo.roomInfo &&
            state.auth.messages2[state.roomInfo.roomInfo.id],
  me: state.me.userInfo,
  roomId: state.roomInfo.roomInfo &&
          state.roomInfo.roomInfo.id,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  sendAction: bindActionCreators(SendMessage, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
