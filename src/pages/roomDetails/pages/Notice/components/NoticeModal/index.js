import React from 'react'
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

const NoticeModal = ({ cancel }) => {
  const isAnnouncement = false
  let title
  let description

  return (
    <MainModal transparent visible >
      <UpperView />
      <MenuView>
        {isAnnouncement ?
          <HearderView>
            <HeaderLeftView>
              <HeaderImage source={NoticeIconUrl} />
              <HeaderText>{I18n.t('Room.Notice.notice')}</HeaderText>
            </HeaderLeftView>
            <CancelButton>
              <CancelText>{I18n.t('cancel')}</CancelText>
            </CancelButton>
          </HearderView> :
          <HearderView>
            <HeaderLeftView>
              <HeaderImage source={QuesIconUrl} />
              <HeaderText>{I18n.t('Room.Notice.questionnaires')}</HeaderText>
            </HeaderLeftView>
            <CancelButton onPress={cancel}>
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
            value={title}
            placeholder={I18n.t('Room.Notice.notice')}
            style={{ height: 40 }}
          />
          <HeaderText style={{ color: '#332f5e' }}>{I18n.t('content')}</HeaderText>
          <TextInput
            onChangeText={description => this.setState({ description })}
            multiline
            autoFocus
            blurOnSubmit={false}
            value={description}
            placeholder={I18n.t('Room.Notice.defaultText1')}
            style={{ height: 160, fontSize: 15 }}
          />
        </InputView>
        {isAnnouncement ?
          <BtnWrapView>
            <SelectButton>
              <SelectImage source={fillP} />
            </SelectButton>
            <SelectButton bgColor="#ec5367">
              <SelectImage source={trumW} />
            </SelectButton>
            <SelectButton bgColor="#fdae57">
              <SelectText>{I18n.t('submit')}</SelectText>
            </SelectButton>
          </BtnWrapView> :
          <BtnWrapView>
            <SelectButton bgColor="#ec5367">
              <SelectImage source={fillW} />
            </SelectButton>
            <SelectButton>
              <SelectImage source={trumP} />
            </SelectButton>
            <SelectButton bgColor="#fdae57" >
              <SelectText>{I18n.t('submit')}</SelectText>
            </SelectButton>
          </BtnWrapView>
        }
      </MenuView>
    </MainModal>
  )
}

export default NoticeModal
