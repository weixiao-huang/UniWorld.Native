import React from 'react'
import I18n from '@/locales'

import InputItem from '@/components/InputItem'

import titleLogo from '@/img/icon/logoRed.png'

import {
  MainView,
  TitleView,
  TitleText,
  TitleImage,
  SwitchText,
  StyledSwitch,
  StyledInput,
} from './style'

const OptionsView = ({
  setData, isPrivate, welcome, expense, rewards,
}) => (
  <MainView>
    <TitleView>
      <TitleImage source={titleLogo} />
      <TitleText>
        {I18n.t('NewRoom.input.second.options')}
      </TitleText>
    </TitleView>
    <InputItem
      title={I18n.t('NewRoom.input.second.private.title')}
      titleWidth="75px"
    >
      <SwitchText>
        {I18n.t('NewRoom.input.second.private.placeholder')}
      </SwitchText>
      <StyledSwitch
        onValueChange={e => setData('isPrivate', e)}
        value={isPrivate}
      />
    </InputItem>
    <InputItem
      title={I18n.t('NewRoom.input.second.welcome.title')}
      titleWidth="75px"
    >
      <StyledInput
        placeholder={I18n.t('NewRoom.input.second.welcome.placeholder')}
        onChangeText={e => setData('welcome', e)}
        defaultValue={welcome}
      />
    </InputItem>
    <InputItem
      title={I18n.t('NewRoom.input.second.expense.title')}
      titleWidth="75px"
    >
      <StyledInput
        placeholder={I18n.t('NewRoom.input.second.expense.placeholder')}
        onChangeText={e => setData('expense', e)}
        defaultValue={expense}
      />
    </InputItem>
    <InputItem
      title={I18n.t('NewRoom.input.second.rewards.title')}
      titleWidth="75px"
    >
      <StyledInput
        placeholder={I18n.t('NewRoom.input.second.rewards.placeholder')}
        onChangeText={e => setData('rewards', e)}
        defaultValue={rewards}
      />
    </InputItem>
  </MainView>
)

export default OptionsView

