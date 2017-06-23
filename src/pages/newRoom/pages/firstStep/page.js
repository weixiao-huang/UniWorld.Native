import React, { Component } from 'react'
import I18n from '@/locales'

import coverImg from '@/img/customCreate.png'

import InputItem from '@/components/InputItem'

import {
  MainScrollView,
  MainView,
  MainCoverImage,
  MainTitleText,
  MainSubTitleText,
  InputWrapView,
  TitleInput,
  ButtonView,
  StyledButton,
} from './style'

import {
  SET_NEW_ROOM_DATA,
} from '../../types'


export default class FirstStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      disabled: false,
    }
  }

  next = () => {
    const { navigation: { navigate }, dispatch } = this.props
    navigate('Second')
    dispatch({ type: SET_NEW_ROOM_DATA, data: { title: this.state.title } })
  }

  isCompleted = () => {
    console.log(this.state.title)
    return this.state.title.length > 5
  }

  render() {
    return (
      <MainScrollView>
        <MainView>
          <MainCoverImage source={coverImg} />
          <MainTitleText>{I18n.t('NewRoom.title')}</MainTitleText>
          <MainSubTitleText>{I18n.t('NewRoom.subTitle1')}</MainSubTitleText>
          <MainSubTitleText>{I18n.t('NewRoom.subTitle2')}</MainSubTitleText>
          <InputWrapView>
            <InputItem
              title={I18n.t('NewRoom.input.name.title')}
              titleWidth="75px"
            >
              <TitleInput
                maxLength={50}
                placeholder={I18n.t('NewRoom.input.name.placeholder')}
                onChangeText={title => this.setState({ title })}
                defaultValue={this.props.title}
              />
            </InputItem>
            <InputItem
              titleWidth="75px"
              title={I18n.t('NewRoom.input.label.title')}
            >
            </InputItem>
          </InputWrapView>
          <ButtonView>
            <StyledButton
              title={I18n.t('NewRoom.button')}
              disabled={!this.isCompleted()}
              onPress={this.next}
            />
          </ButtonView>
        </MainView>
      </MainScrollView>
    )
  }
}
