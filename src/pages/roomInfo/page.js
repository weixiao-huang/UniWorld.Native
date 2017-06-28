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

import {
  JOIN_ROOM,
  LEAVE_ROOM,
  MARK_ROOM,
  UNMARK_ROOM,
} from './types'

export default class RoomInfo extends Component {
  render() {
    let options
    const {
      roomInfo, token, dispatch, myId, hostFollowed,
      navigateAction, followAction, unfollowAction,
    } = this.props
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
              myId={myId}
              hostFollowed={hostFollowed}
              follow={() => followAction(roomInfo.host.id)}
              unfollow={() => unfollowAction(roomInfo.host.id)}
            />
            {token && <EmptyView height="60px" />}
          </MainView>}
        </MainScrollView>
        {token && <ButtonArea
          join={() => dispatch({ type: JOIN_ROOM })}
          leave={() => dispatch({ type: LEAVE_ROOM })}
          room={() => navigateAction(roomInfo.id)}
          mark={() => dispatch({ type: MARK_ROOM })}
          unmark={() => dispatch({ type: UNMARK_ROOM })}
          joined={this.props.isJoined}
          marked={this.props.isMarked}
        />}
      </ContentView>
    )
  }
}
