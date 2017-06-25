import React from 'react'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
import Button from '@/components/Button'

const MainView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`

const ItemView = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  backgroundColor: #ffffff;
  width: 120px;
  border-radius: 6px;
  opacity: 0.6;
`

const ButtonText = styled.Text`
  font-size: 14px;
  color: #bcbcbc;
  text-align: center;
  line-height: 20px;
  marginLeft: 5px;
`

const ButtonImage = styled.Image`
  width: 42px;
  height: 42px;
  resize-mode: contain;
`

const ButtonImage2 = styled.Image`
  width: 42px;
  height: 38px;
  resize-mode: contain;
  marginTop: 2px;
`

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
