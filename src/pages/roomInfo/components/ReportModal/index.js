import React, { Component } from 'react'
import { Alert } from 'react-native'
import I18n from 'react-native-i18n'
import api from '@/api'

import {
  MainModal,
  StyledKeyboardAvoidingView,
  UpperView,
  HearderView,
  HeaderLeftView,
  HeaderImage,
  HeaderText,
  MainText,
  CancelButton,
  CancelText,
  InputView,
  TextInput,
  BtnWrapView,
  SelectButton,
  SelectButton2,
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
      title: '',
      text: '',
    }
  }

  submit = async () => {
    const { title, description } = this.state
    if (title.length > 0 && description.length > 0) {
      const { roomId, token, cancel } = this.props
      const data = {
        text: this.state.text,
      }
      // const res = await api.reportRoom(data)(roomId)(token)
      console.log(res)
      cancel()
      Alert.alert(
        I18n.t('Alert.Report.title'),
        I18n.t('Alert.Report.success'),
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      )
    }
  }

  render() {
    return (
      <MainModal transparent visible >
        <StyledKeyboardAvoidingView
          behavior="position"
        >
          <UpperView />
          <HearderView>
            <HeaderLeftView>
              <HeaderImage source={NoticeIconUrl} />
              <HeaderText>{I18n.t('Room.Info.report')}</HeaderText>
            </HeaderLeftView>
            <CancelButton onPress={this.props.cancel}>
              <CancelText>{I18n.t('cancel')}</CancelText>
            </CancelButton>
          </HearderView>
          <InputView>
            <HeaderText>{I18n.t('Room.Footer.room')}</HeaderText>
            <MainText>{this.props.name}</MainText>
            <HeaderText>{I18n.t('Room.Info.reason')}</HeaderText>
            <TextInput
              onChangeText={text => this.setState({ text })}
              multiline
              autoFocus
              placeholderTextColor="#bbbbbb"
              blurOnSubmit={false}
              value={this.state.text}
              placeholder={I18n.t('Room.Info.defaultReason1')}
              style={{ height: 160, fontSize: 15 }}
            />
          </InputView>
          <BtnWrapView>
            <SelectButton2
              bgColor="#ec5367"
            >
              <SelectImage source={trumW} />
            </SelectButton2>
            <SelectButton bgColor="#fdae57" onPress={this.submit}>
              <SelectText>{I18n.t('Room.Info.report')}</SelectText>
            </SelectButton>
          </BtnWrapView>

        </StyledKeyboardAvoidingView>
      </MainModal>
    )
  }
}
