import React, { Component } from 'react'
import I18n from '@/locales'
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
  confirm = () => {
    //这里放建房间的通讯，数据都在this.props中了
    //注意也要上传封面哦
  }

  render() {
    const newRoom = this.props.newRoom
    const max = newRoom.max_participants
    console.log(this.props)
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
              participantCount='1'
              participantIds={newRoom.participant_ids}
              titleLabel="HOT"
            />
          </WrapView>
          <RequiredTitleView>
            <RequiredTitleImage source={titleIconBlue} />
            <RequiredTitleText style={{ color: '#3555b6' }}>
              {I18n.t('NewRoom.input.third.confirm')}
            </RequiredTitleText>
          </RequiredTitleView>
          <InfoBoxView>
            {
              confirms.map((item, index) => {
                return (
                  item.content
                    ? <StyledItem
                      key={index}
                      title={item.title}
                      inlineStyle={{ justifyContent: 'space-between' }}
                    >
                      <RightText>{item.content}</RightText>
                    </StyledItem>
                    : null
                )
              })
            }
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
