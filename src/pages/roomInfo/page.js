import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import EmptyView from '@/components/EmptyView'
import {
  MainScrollView,
  MainView,
  CoverImage,
  ContentView,
} from './style'

import Header from './components/Header'
import Time from './components/Time'
import People from './components/People'
import Host from './components/Host'
import LableBox from './components/LabelBox'
import Options from './components/Options'
import ButtonArea from './components/ButtonArea'

export default class RoomInfo extends Component {
  constructor(props) {
    super(props)
    const { myInfo } = this.props
    this.state = {
      joined: false,
      marked: false,
    }
  }

  join = () => {
    if (!this.state.joined) {
      console.log('join')
      this.setState({
        joined: true,
      })
    } else {
      console.log('room')
    }
  }

  leave = () => {
    if (this.state.joined) {
      console.log('leave')
      this.setState({
        joined: false,
      })
    } else if (this.state.marked) {
      console.log('unmark')
      this.setState({
        marked: false,
      })
    } else {
      console.log('mark')
      this.setState({
        marked: true,
      })
    }
  }

  render() {
    let options
    const { roomInfo, myInfo } = this.props
    if (roomInfo) {
      options = {
        location_string: {
          iconName: 'location-on',
          content: roomInfo.location_string,
        },
        welcome: { iconName: 'thumb-up' },
        rewards: { iconName: 'card-giftcard' },
        expense: { iconName: 'attach-money' },
      }
      let opt = roomInfo.options
      if (opt) {
        opt = JSON.parse(opt)
        Object.keys(opt).map((key) => {
          if (options[key]) options[key].content = opt[key]
          return key
        })
      } else options = {}
    }
    return (
      <ContentView>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <MainScrollView>
          {roomInfo && <MainView>
            <CoverImage source={{ uri: roomInfo.cover }} />
            <Header
              title={roomInfo.title}
              titleTag="HOT"
              description={roomInfo.description}
            />
            <Time
              start={roomInfo.date_time_start}
              end={roomInfo.date_time_end}
            />
            <EmptyView />
            <People
              participants={roomInfo.participants}
              maxParticipants={roomInfo.max_participants}
            />
            <EmptyView />
            {roomInfo.labels.length > 0 &&
              <LableBox labels={roomInfo.labels} />
            }
            <EmptyView />
            <Options options={options} />
            <EmptyView />
            <Host
              host={roomInfo.host}
              myId={this.props.myId}
            />
            {myInfo && <EmptyView height="60px" />}
          </MainView>}
        </MainScrollView>
        {myInfo && <ButtonArea
          join={this.join}
          leave={this.leave}
          joined={this.state.joined}
          marked={this.state.marked}
        />}
      </ContentView>
    )
  }
}
