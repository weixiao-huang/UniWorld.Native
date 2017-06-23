import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import I18n from '@/locales'

import coverImg from '@/img/customCreate2.png'

import {
  MainScrollView,
  MainView,
  HeaderImage,
  HeaderText,
} from './style'


export default class SecondStep extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <MainScrollView>
          <MainView>
            <HeaderImage source={coverImg} />
            <HeaderText>
              {I18n.t('NewRoom.input.second.title')}
            </HeaderText>
          </MainView>
        </MainScrollView>
      </KeyboardAvoidingView>
    )
  }
}
