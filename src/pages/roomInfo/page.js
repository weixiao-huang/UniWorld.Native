import React, { Component } from 'react'
import EmptyView from '@/components/EmptyView'
import {
  MainScrollView,
  MainView,
  CoverImage,
} from './style'

import Header from './components/Header'
import Time from './components/Time'
import People from './components/People'
import Host from './components/Host'
import LableBox from './components/LabelBox'
import Options from './components/Options'

export default class RoomInfo extends Component {

  render() {
    let options
    if (this.props.roomInfo) {
      options = {
        location_string: {
          iconName: 'location-on',
          content: this.props.roomInfo.location_string,
        },
        welcome: {
          iconName: 'thumb-up',
        },
        rewards: {
          iconName: 'card-giftcard',
        },
        expense: {
          iconName: 'attach-money',
        },
      }
      let opt = this.props.roomInfo.options
      if (opt) {
        opt = JSON.parse(opt)
        for (let option in opt) {
          if (opt.hasOwnProperty(option) && options.hasOwnProperty(option)) {
            options[option].content = opt[option]
          }
        }
      } else opt = {}
    }
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
          {this.props.roomInfo.labels.length > 0
            ? <LableBox labels={this.props.roomInfo.labels} />
            : null
          }
          <EmptyView />
          <Options options={options} />
          <EmptyView />
          <Host host={this.props.roomInfo.host} myId={this.props.myId} />
        </MainView>}
      </MainScrollView>
    )
  }
}
