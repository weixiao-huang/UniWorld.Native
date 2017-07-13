import React from 'react'
import I18n from 'react-native-i18n'

import {
  MainView,
  ItemView,
  ButtonImage,
  ButtonImage2,
  ButtonText,
} from './style'

const emailUrl = require('@/img/icon/email.png')
const stuUrl = require('@/img/icon/card.png')

const AuthButton = ({ emailAuth, stuAuth }) => (
  <MainView>
    <ItemView onPress={emailAuth} >
      <ButtonImage source={emailUrl} />
      <ButtonText>{I18n.t('Register.emailAuth')}</ButtonText>
    </ItemView>
    <ItemView onPress={stuAuth} >
      <ButtonImage2 source={stuUrl} />
      <ButtonText>{I18n.t('Register.imageAuth')}</ButtonText>
    </ItemView>
  </MainView>
)

export default AuthButton
