import React, { PropTypes, Component } from 'react'
import { TouchableOpacity } from 'react-native'
import starIcon from '@/img/icon/starIcon.png'

import RoomItem from '../RoomItem'

import {
  MainView,
  MainTitleView,
  MainTitleImage,
  MainTitleText,
  MainWrapView,
  RoomListView,
} from './style'


export default class RoomWrap extends Component {
  // roomList, title, titleLabel,
  // navigateAction, myFollows,

  render() {
    console.log(this.props)
    return (
      <MainView>
        {!!this.props.title && <MainTitleView>
          <MainTitleImage
            source={starIcon}
          />
          <MainTitleText>{this.props.title}</MainTitleText>
        </MainTitleView>}
        <MainWrapView>
          {this.props.roomList.map(item => (
            <RoomListView key={item.id}>
              <TouchableOpacity
                onPress={() => this.props.navigateAction(item.id)}
              >
                <RoomItem
                  src={item.cover}
                  title={item.title}
                  place={item.location_string}
                  dateTimeStart={item.date_time_start}
                  dateTimeEnd={item.date_time_end}
                  maxParticipants={item.max_participants}
                  participantCount={item.participant_count}
                  participantIds={item.participant_ids}
                  titleLabel={this.props.titleLabel}
                  myFollows={this.props.myFollows}
                />
              </TouchableOpacity>
            </RoomListView>
          ))}
        </MainWrapView>
      </MainView>
    )
  }
}

