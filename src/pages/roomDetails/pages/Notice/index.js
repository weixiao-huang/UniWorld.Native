import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { SendAnnouncement } from '@/pages/roomDetails/actions'

import Page from './page'

const mapStateToProps = state => ({
  token: state.auth.token,
  roomId: state.roomInfo.roomInfo.id,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  SendAnnouncementAction: bindActionCreators(SendAnnouncement, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
