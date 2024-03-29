import React, { Component } from 'react'

import EmptyView from '@/components/EmptyView'
import RoomItem from '@/components/RoomItem'

import {
  MainView,
  MainScrollView,
  ItemView,
} from './style'

import NoticeItem from './components/NoticeItem'
import NoticeModal from './components/NoticeModal'
import ButtonArea from './components/ButtonArea'

export default class Notice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  cancel = () => this.setState({ showModal: false })

  show = () => this.setState({ showModal: true })

  render() {
    const { isHost, roomInfo, questionnaires } = this.props
    return (
      <MainView>
        <MainScrollView>
          <ItemView>
            {roomInfo && <RoomItem
              id={roomInfo.id}
              src={roomInfo.cover}
              title={roomInfo.title}
              place={roomInfo.location_string}
              dateTimeStart={roomInfo.date_time_start}
              dateTimeEnd={roomInfo.date_time_end}
              maxParticipants={roomInfo.max_participants}
              participantCount={roomInfo.participants.length}
              participantIds={roomInfo.participant_ids}
              infoFlag
              myFollows={[]}
              myFollowDict={{}}
            />
            }
          </ItemView>
          {questionnaires.map(item => (
            <NoticeItem key={item.id} item={item} />
          ))}
          <EmptyView height="80px" />
        </MainScrollView>
        {this.state.showModal ?
          <NoticeModal
            cancel={this.cancel}
            token={this.props.token}
            roomId={this.props.roomId}
            action={this.props.SendAnnouncementAction}
          /> :
          (isHost && <ButtonArea
            rightFunc={this.show}
            leftFunc={() => {}}
          />)
        }
      </MainView>
    )
  }
}
