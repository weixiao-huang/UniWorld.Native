import React, { Component } from 'react'
import I18n from 'react-native-i18n'

import {
  MainModal,
  UpperView,
  MenuView,
  HearderView,
  HeaderLeftView,
  HeaderImage,
  HeaderText,
  CancelButton,
  CancelText,
  InputView,
  TextInput,
  BtnWrapView,
  SelectButton,
  SelectImage,
  SelectText,
} from './style'

const NoticeIconUrl = require('@/img/icon/trumpet.png')
const QuesIconUrl = require('@/img/icon/fill.png')
const fillP = require('@/img/icon/fillP.png')
const fillW = require('@/img/icon/fillW.png')
const trumP = require('@/img/icon/trumP.png')
const trumW = require('@/img/icon/trumW.png')

export default class NoticeModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAnnouncement: true,
      title: '',
      description: '',
    }
  }

  submit = () => {
    //发布
  }

  render() {
    return (
      <MainModal transparent visible >
        <UpperView />
        <MenuView>
          {this.state.isAnnouncement ?
            <HearderView>
              <HeaderLeftView>
                <HeaderImage source={NoticeIconUrl} />
                <HeaderText>{I18n.t('Room.Notice.notice')}</HeaderText>
              </HeaderLeftView>
              <CancelButton onPress={this.props.cancel}>
                <CancelText>{I18n.t('cancel')}</CancelText>
              </CancelButton>
            </HearderView> :
            <HearderView>
              <HeaderLeftView>
                <HeaderImage source={QuesIconUrl} />
                <HeaderText>{I18n.t('Room.Notice.questionnaires')}</HeaderText>
              </HeaderLeftView>
              <CancelButton onPress={this.props.cancel}>
                <CancelText>{I18n.t('cancel')}</CancelText>
              </CancelButton>
            </HearderView>
          }
          <InputView>
            <HeaderText>{I18n.t('title')}</HeaderText>
            <TextInput
              onChangeText={title => this.setState({ title })}
              autoFocus
              blurOnSubmit={false}
              value={this.state.title}
              placeholder={I18n.t('Room.Notice.notice')}
              style={{ height: 40 }}
            />
            <HeaderText style={{ color: '#332f5e' }}>{I18n.t('content')}</HeaderText>
            <TextInput
              onChangeText={description => this.setState({ description })}
              multiline
              autoFocus
              blurOnSubmit={false}
              value={this.state.description}
              placeholder={I18n.t('Room.Notice.defaultText1')}
              style={{ height: 160, fontSize: 15 }}
            />
          </InputView>
          {this.state.isAnnouncement ?
            <BtnWrapView>
              <SelectButton onPress={() => this.setState({ isAnnouncement: false })}>
                <SelectImage source={fillP} />
              </SelectButton>
              <SelectButton bgColor="#ec5367" onPress={() => this.setState({ isAnnouncement: true })}>
                <SelectImage source={trumW} />
              </SelectButton>
              <SelectButton bgColor="#fdae57" onPress={this.submit}>
                <SelectText>{I18n.t('submit')}</SelectText>
              </SelectButton>
            </BtnWrapView> :
            <BtnWrapView>
              <SelectButton bgColor="#ec5367" onPress={() => this.setState({ isAnnouncement: true })}>
                <SelectImage source={fillW} />
              </SelectButton>
              <SelectButton onPress={() => this.setState({ isAnnouncement: false })}>
                <SelectImage source={trumP} />
              </SelectButton>
              <SelectButton bgColor="#fdae57" onPress={this.submit}>
                <SelectText>{I18n.t('submit')}</SelectText>
              </SelectButton>
            </BtnWrapView>
          }
        </MenuView>
      </MainModal>
    )
  }
}
