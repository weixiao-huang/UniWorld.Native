import { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigateToRoomInfo } from '@/router/actions'

import Page from './page'

const mapStateToProps = state => ({
  myFollows: state.me && state.me.userInfo && state.me.followIds,
  myFollowDict: state.me && state.me.userInfo && state.me.followDict,
})

const mapDispatchToProps = dispatch => ({
  navigateAction: bindActionCreators(NavigateToRoomInfo, dispatch),
})

Page.propTypes = {
  title: PropTypes.string,
  roomList: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location_string: PropTypes.string.isRequired,
      date_time_start: PropTypes.string.isRequired,
      date_time_end: PropTypes.string.isRequired,
      max_participants: PropTypes.number.isRequired,
      participant_count: PropTypes.number.isRequired,
      participant_ids: PropTypes.arrayOf(
        PropTypes.number.isRequired,
      ),
    }),
  ).isRequired,
}

Page.defaultProps = {
  title: '',
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
