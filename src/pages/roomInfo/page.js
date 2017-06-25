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
    this.state = {
      joined: false,
      marked: false,
    }
  }

  _join() {
    console.log(this.state)
    if (!this.state.joined) {
      //join
      console.log('join')
      this.setState({
        joined: true,
      })
    } else {
      //room
      console.log('room')
    }
  }

  _leave() {
    if (this.state.joined) {
      //leave
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
      <ContentView>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
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
        <ButtonArea
          join={this._join.bind(this)}
          leave={this._leave.bind(this)}
          joined={this.state.joined}
          marked={this.state.marked}
        />
      </ContentView>
    )
  }
}
