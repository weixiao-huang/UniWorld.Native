import React, { Component } from 'react'
import { StatusBar, Alert } from 'react-native'
import EmptyView from '@/components/EmptyView'
import AnimatedScreen from '@/components/AnimatedScreen'
import Loading from '@/components/Loading'
import I18n from '@/locales'
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
import ReportModal from './components/ReportModal'

import {
  JOIN_ROOM,
  LEAVE_ROOM,
  MARK_ROOM,
  UNMARK_ROOM,
} from './types'

export default class RoomInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }
  mark = () => {
    // this.props.dispatch({ type: MARK_ROOM })
    this.setState({
      showModal: true,
    })
    console.log(this.state.showModal)
  }

  cancel = () => {
    console.log('445')

    Alert.alert(
      I18n.t('Alert.Report.title'),
      I18n.t('Alert.Report.success'),
      [
        {
          text: 'OK',
          onPress: () => {
            this.setState({
              showModal: false,
            })
          },
        },
      ],
    )
  }

  render() {
    let options
    const {
      roomInfo, token, dispatch, myId, hostFollowed, followRequesting,
      navigateAction, followAction, unfollowAction, participants,
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
        {roomInfo ? <MainScrollView>
          <MainView>
            <Loading visible={followRequesting} />
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
              participants={participants || roomInfo.participants}
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
            {!!token && <EmptyView height="60px" />}
          </MainView>
        </MainScrollView> : <AnimatedScreen />}
        {!!token && !!roomInfo && <ButtonArea
          join={() => {
            dispatch({ type: JOIN_ROOM })
          }}
          leave={() => {
            Alert.alert(
              I18n.t('Room.Footer.Leave.title'),
              I18n.t('Room.Footer.Leave.content'),
              [
                {
                  text: I18n.t('Room.Footer.Leave.confirm'),
                  onPress: () => dispatch({ type: LEAVE_ROOM }),
                },
                {
                  text: I18n.t('Room.Footer.Leave.cancel'),
                  onPress: () => { },
                },
              ],
            )
          }
          }
          room={() => navigateAction(roomInfo.id)}
          mark={this.mark}
          unmark={() => dispatch({ type: UNMARK_ROOM })}
          joined={this.props.isJoined}
          marked={this.props.isMarked}
        />}
        {!!token && !!roomInfo && !!this.state.showModal && <ReportModal
          cancel={this.cancel}
          token={token}
          roomId={roomInfo.id}
          name={roomInfo.title}
        />}
      </ContentView>
    )
  }
}
