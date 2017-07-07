import { connect } from 'react-redux'
import Page from './page'

const mapStateToProps = state => ({
  messages: state.roomInfo.roomInfo &&
            state.auth.messages[state.roomInfo.roomInfo.id],
  myId: state.me.userInfo.id,
  roomId: state.roomInfo.roomInfo &&
          state.roomInfo.roomInfo.id,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
