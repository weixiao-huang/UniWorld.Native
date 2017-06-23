import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import I18n from '@/locales'

import InputItem from '@/components/InputItem'

import coverImg from '@/img/customCreate2.png'
import logoBlueImg from '@/img/icon/logoBlue.png'

import TitleLabelView from './components/TitleLabelView'
import CoverView from './components/CoverView'

import {
  MainScrollView,
  MainView,
  HeaderImage,
  HeaderText,
  RequiredView,
  RequiredTitleView,
  RequiredTitleImage,
  RequiredTitleText,
  IntroInput,
} from './style'


export default class SecondStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUploading: false,
      cover: this.props.cover,
      description: this.props.description,
    }
  }

  showImgPicker = () => {

  }

  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <MainScrollView>
          <MainView>
            <HeaderImage source={coverImg} />
            <HeaderText>
              {I18n.t('NewRoom.input.second.title')}
            </HeaderText>
            <TitleLabelView
              title={this.props.title}
              labels={this.props.labels}
            />
            <CoverView
              cover={this.state.cover}
              isUploading={this.state.isUploading}
              onChangeUpload={isUploading => this.setState({ isUploading })}
              onChangeCover={cover => this.setState({ cover })}
            />
            <RequiredView>
              <RequiredTitleView>
                <RequiredTitleImage source={logoBlueImg} />
                <RequiredTitleText>
                  Required
                </RequiredTitleText>
              </RequiredTitleView>
            </RequiredView>
            <InputItem
              title={I18n.t('NewRoom.input.second.intro.title')}
              titleWidth="75px"
            >
              <IntroInput
                placeholder={I18n.t('NewRoom.input.second.intro.placeholder')}
                multiline
                defaultValue={this.state.description}
                onChangeText={description => this.setState({ description })}
              />
            </InputItem>

          </MainView>
        </MainScrollView>
      </KeyboardAvoidingView>
    )
  }
}
