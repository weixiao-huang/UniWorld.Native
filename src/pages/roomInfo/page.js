import React, { Component } from 'react'

import {
  MainScrollView,
  MainView,
  MainText,
  CoverImage,
  EmptyView,
} from './style'

import Header from './components/Header'
import Time from './components/Time'
import People from './components/People'
import Host from './components/Host'



export default class RoomInfo extends Component {
  render() {
    return (
      <MainScrollView>
        {this.props.roomInfo && <MainView>
          <CoverImage source={{ uri: this.props.roomInfo.cover }} />
          <Header
            title={this.props.roomInfo.title}
            titleTag="HOT"
            description={this.props.roomInfo.description}
          />
          <Time
            start={this.props.roomInfo.date_time_start}
            end={this.props.roomInfo.date_time_end}
          />
          <EmptyView />
          <People
            participants={this.props.roomInfo.participants}
            maxParticipants={this.props.roomInfo.max_participants}
          />
          <EmptyView />
          <Host host={this.props.roomInfo.host} myId={this.props.myId} />
        </MainView>}
      </MainScrollView>
    )
  }
}
