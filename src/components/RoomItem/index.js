import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  NavigateToRoomInfo, NavigateToRoomDetails,
} from '@/router/actions'

import Page from './page'

const mapStateToProps = state => ({
  myId: state.me.userInfo && state.me.userInfo.id,
})

const mapDispatchToProps = dispatch => ({
  navigateToRoomInfoAction: bindActionCreators(NavigateToRoomInfo, dispatch),
  navigateToRoomDetailsAction: bindActionCreators(NavigateToRoomDetails, dispatch),
})


Page.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  dateTimeStart: PropTypes.string.isRequired,
  dateTimeEnd: PropTypes.string.isRequired,
  // myFollows: PropTypes.array.isRequired,
}

Page.defaultProps = {
  max_participants: null,
  participant_count: 1,
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
