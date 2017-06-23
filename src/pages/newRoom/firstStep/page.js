import React, { Component } from 'react'
import I18n from '@/locales'

import coverImg from '@/img/customCreate.png'

import {
  MainScrollView,
  MainView,
  MainCoverImage,
  MainTitleText,
  MainSubTitleText,
  InputWrapView,
  ButtonView,
  StyledButton,
} from './style'


export default class FirstStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      disabled: false,
    }
  }

  next = () => {

  }

  isCompleted = () => {}

  render() {
    return (
      <MainScrollView>
        <MainView>
          <MainCoverImage source={coverImg} />
          <MainTitleText>{I18n.t('NewRoom.title')}</MainTitleText>
          <MainSubTitleText>{I18n.t('NewRoom.subTitle1')}</MainSubTitleText>
          <MainSubTitleText>{I18n.t('NewRoom.subTitle2')}</MainSubTitleText>
          <InputWrapView>

          </InputWrapView>
          <ButtonView>
            <StyledButton
              title={I18n.t('NewRoom.button')}
            />
          </ButtonView>
        </MainView>
      </MainScrollView>
    )
  }
}
