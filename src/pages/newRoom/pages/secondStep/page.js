import React, { Component } from 'react'
import { KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import I18n from '@/locales'

import InputItem from '@/components/InputItem'
import Label from '@/components/Label'

import coverImg from '@/img/customCreate2.png'
import logoBlueImg from '@/img/icon/logoBlue.png'

import {
  MainScrollView,
  MainView,
  HeaderImage,
  HeaderText,
  TitleLabelView,
  TitleText,
  LabelView,
  CoverWrapView,
  CoverOuterView,
  CoverInnerView,
  CoverTouch,
  CoverPlaceholderText,
  CoverPreviewView,
  CoverPreviewImage,
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
            <TitleLabelView>
              <InputItem
                title={I18n.t('NewRoom.input.name.title')}
                titleWidth="75px"
              >
                <TitleText>
                  {this.props.title}
                </TitleText>
              </InputItem>
              <InputItem
                title={I18n.t('NewRoom.input.label.title')}
                titleWidth="75px"
              >
                <LabelView>
                  {this.props.labels.map(item => (
                    <Label key={item} title={item} />
                  ))}
                </LabelView>
              </InputItem>
            </TitleLabelView>
            <CoverWrapView>
              <InputItem
                title={I18n.t('NewRoom.input.second.Cover.title')}
                titleWidth="75px"
              >
                <CoverOuterView>
                  <CoverInnerView>
                    <CoverTouch
                      onPress={this.showImgPicker}
                    >
                      <CoverPlaceholderText>
                        {I18n.t('NewRoom.input.second.Cover.placeholder')}
                      </CoverPlaceholderText>
                      <ActivityIndicator
                        animating={this.state.isUploading}
                      />
                      <Icon name="camera" size={20} />
                    </CoverTouch>
                    {!!this.state.cover && <CoverPreviewView>
                      <CoverPreviewImage
                        source={{ uri: this.state.cover }}
                      />
                    </CoverPreviewView>}
                  </CoverInnerView>
                </CoverOuterView>
              </InputItem>
            </CoverWrapView>
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
