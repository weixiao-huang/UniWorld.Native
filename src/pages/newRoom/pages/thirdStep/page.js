import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import I18n from '@/locales'
import { setLabelDict } from '@/utils'

import titleIconPink from '@/img/icon/logoRed.png'
import titleIconBlue from '@/img/icon/logoBlue.png'

import RoomItem from '@/components/RoomItem'

import {
  MainScrollView,
  MainView,
  WrapView,
  InfoBoxView,
  StyledItem,
  RightText,
  RequiredTitleView,
  RequiredTitleImage,
  RequiredTitleText,
  StyledButton,
} from './style'

export default class ThirdStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labelDict: setLabelDict('name_ch', this.props.initialLabels),
    }
  }

  confirm = () => {
    // 这里放建房间的通讯，数据都在this.props中了
    const {
      newRoom, createRoomAction, navigation,
    } = this.props
    const data = {
      title: newRoom.title,
      is_matchroom: newRoom.is_matchroom,
      description: newRoom.description,
      location_string: newRoom.location_string,
      max_participants: isNaN(newRoom.max_participants) ? null : newRoom.max_participants,
      date_time_start: newRoom.date_time_start.split(' ').slice(0, 2).join('T'),
      date_time_end: newRoom.date_time_end.split(' ').slice(0, 2).join('T'),
      options: JSON.stringify({
        welcome: newRoom.welcome,
        expense: newRoom.expense,
        rewards: newRoom.rewards,
      }),
      show: !newRoom.isPrivate,
      labels: newRoom.labels.map(item => this.state.labelDict[item]),
    }
    navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'First' }),
      ],
    }))
    createRoomAction(data)
  }

  render() {
    const { newRoom } = this.props
    const max = newRoom.max_participants
    const confirms = [
      {
        title: I18n.t('NewRoom.input.second.name'),
        content: newRoom.title,
      },
      {
        title: I18n.t('NewRoom.input.label.title'),
        content: newRoom.labels.join(', '),
      },
      {
        title: I18n.t('NewRoom.input.second.intro.title'),
        content: newRoom.description,
      },
      {
        title: I18n.t('NewRoom.input.second.start.title'),
        content: newRoom.date_time_start,
      },
      {
        title: I18n.t('NewRoom.input.second.end.title'),
        content: newRoom.date_time_end,
      },
      {
        title: I18n.t('NewRoom.input.second.location.title'),
        content: newRoom.location_string,
      },
      {
        title: I18n.t('NewRoom.input.second.max.title'),
        content: isNaN(max) ? 'NL' : max,
      },
      {
        title: I18n.t('NewRoom.input.second.private.title'),
        content: newRoom.isPrivate ? I18n.t('yes') : I18n.t('no')
      },
      {
        title: I18n.t('NewRoom.input.second.welcome.title'),
        content: newRoom.welcome,
      },
      {
        title: I18n.t('NewRoom.input.second.expense.title'),
        content: newRoom.expense,
      },
      {
        title: I18n.t('NewRoom.input.second.rewards.title'),
        content: newRoom.rewards,
      },
    ]
    return (
      <MainScrollView>
        <MainView>
          <RequiredTitleView>
            <RequiredTitleImage source={titleIconPink} />
            <RequiredTitleText>
              {I18n.t('NewRoom.input.third.preview')}
            </RequiredTitleText>
          </RequiredTitleView>
          <WrapView>
            <RoomItem
              src={newRoom.cover}
              title={newRoom.title}
              place={newRoom.location_string}
              dateTimeStart={newRoom.date_time_start}
              dateTimeEnd={newRoom.date_time_end}
              maxParticipants={newRoom.max_participants}
              participantCount="1"
              participantIds={newRoom.participant_ids}
              titleLabel="HOT"
            />
          </WrapView>
          <RequiredTitleView>
            <RequiredTitleImage source={titleIconBlue} />
            <RequiredTitleText color="#3555b6">
              {I18n.t('NewRoom.input.third.confirm')}
            </RequiredTitleText>
          </RequiredTitleView>
          <InfoBoxView>
            {confirms.map(item => (
              !!item.content && <StyledItem
                key={item.title}
                title={item.title}
              >
                <RightText>{item.content}</RightText>
              </StyledItem>
            ))}
          </InfoBoxView>
          <StyledButton
            title={I18n.t('NewRoom.button')}
            onPress={this.confirm}
          />
        </MainView>
      </MainScrollView>
    )
  }
}
