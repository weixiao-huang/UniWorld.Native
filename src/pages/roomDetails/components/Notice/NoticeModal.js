import React from 'react'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
import Button from '@/components/Button'

const UpperView = styled.View`
  backgroundColor:#333333;
  width:100%;
  height:56%;
  opacity:0.5;
`
const MainModal = styled.Modal`
`
const MenuView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex: 1;
`
const HearderView = styled.View`
  justifyContent: space-between;
  flexDirection: row;
  backgroundColor: #eee;
  height: 43px;
  padding: 10px;
`
const HeaderLeftView = styled.View`
  flexDirection: row;
  alignItems: center;
`
const HeaderImage = styled.Image`
  width: 16px;
  height: 16px;
  resizeMode: cover;
  marginRight: 10px;
`
const HeaderText = styled.Text`
  fontSize: 16px;
  fontWeight: 600;
`
const CancelButton = styled.TouchableOpacity`
  flexDirection: row;
  alignItems: center;
`
const CancelText = styled.Text`
  color: #bcbcbc;
`
const InputView = styled.View`
  backgroundColor: white;
  paddingLeft: 10px;
  height: 200px;
`
const TextInput = styled.TextInput`
  width: 100%;
  fontSize: 16px;
`
const BtnWrapView = styled.View`
  flexDirection: row;
  height: 50px;
  width: 100%;
`
const SelectButton = styled.TouchableOpacity`
  alignItems: center;
  justifyContent: center;
  flex:1;
`
const SelectImage = styled.Image`
  width: 16px
  height: 16px;
  resizeMode: cover;
`


const SelectText = styled.Text`
  color: white;
`
const NoticeIconUrl = require('@/img/icon/trumpet.png')
const QuesIconUrl = require('@/img/icon/fill.png')
const fillP = require('@/img/icon/fillP.png')
const fillW = require('@/img/icon/fillW.png')
const trumP = require('@/img/icon/trumP.png')
const trumW = require('@/img/icon/trumW.png')



const NoticeModal = () => {
  let is_announcement = true
  let title
  let description
  return (
    <MainModal transparent visible >
      <UpperView />
      <MenuView>
        {is_announcement ?
          <HearderView>
            <HeaderLeftView>
              <HeaderImage source={NoticeIconUrl} />
              <HeaderText style={{ color: '#332f5e' }}>{I18n.t('Room.Notice.notice')}</HeaderText>
            </HeaderLeftView>
            <CancelButton>
              <CancelText style={{ color: '#bcbcbc' }}>{I18n.t('cancel')}</CancelText>
            </CancelButton>
          </HearderView> :
          <HearderView>
            <HeaderLeftView>
              <HeaderImage source={QuesIconUrl} />
              <HeaderText style={{ color: '#332f5e' }}>{I18n.t('Room.Notice.questionnaires')}</HeaderText>
            </HeaderLeftView>
            <CancelButton>
              <CancelText style={{ color: '#bcbcbc' }}>{I18n.t('cancel')}</CancelText>
            </CancelButton>
          </HearderView>
        }
        <InputView>
          <HeaderText style={{ color: '#332f5e' }}>{I18n.t('title')}</HeaderText>
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
        {is_announcement ?
          <BtnWrapView>
            <SelectButton style={{ backgroundColor: 'white' }}>
              <SelectImage source={fillP} />
            </SelectButton>
            <SelectButton style={{ backgroundColor: '#ec5367' }}>
              <SelectImage source={trumW} />
            </SelectButton>
            <SelectButton style={{ backgroundColor: '#fdae57' }} >
              <SelectText>{I18n.t('submit')}</SelectText>
            </SelectButton>
          </BtnWrapView> :
          <BtnWrapView>
            <SelectButton style={{ backgroundColor: 'ec5367' }}>
              <SelectImage source={fillW} />
            </SelectButton>
            <SelectButton style={{ backgroundColor: 'white' }}>
              <SelectImage source={trumP} />
            </SelectButton>
            <SelectButton style={{ backgroundColor: '#fdae57' }} >
              <SelectText>{I18n.t('submit')}</SelectText>
            </SelectButton>
          </BtnWrapView>
        }
      </MenuView>
    </MainModal>
  )
}

export default NoticeModal
