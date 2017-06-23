import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Picker from 'react-native-picker'
import I18n from '@/locales'
import { createInitialLabels } from '@/utils'

import InputItem from '@/components/InputItem'
import Label from '@/components/Label'

import coverImg from '@/img/customCreate.png'

import {
  MainScrollView,
  MainView,
  MainCoverImage,
  MainTitleText,
  MainSubTitleText,
  InputWrapView,
  TitleInput,
  LabelContainerView,
  LabelWrapView,
  LabelPickerText,
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
      labels: this.props.labels,
      initialLabels: createInitialLabels(
        'name_ch', this.props.initialLabels,
      ),
      disabled: false,
    }
  }

  next = () => {
    const { navigation: { navigate }, dispatch } = this.props
    navigate('Second')
    dispatch({
      type: SET_NEW_ROOM_DATA,
      data: {
        title: this.state.title,
        labels: this.state.labels,
      },
    })
  }

  isCompleted = () => this.state.title.length > 5

  showLabelPicker = () => {
    Picker.init({
      pickerData: this.state.initialLabels,
      pickerTitleText: I18n.t('NewRoom.input.label.selectTitle'),
      onPickerConfirm: (pickedValue) => {
        const label = pickedValue.pop() || pickedValue.pop()
        if (this.state.labels.indexOf(label) < 0) {
          this.setState({
            labels: this.state.labels.concat(label),
          })
        }
      },
      onPickerCancel: () => {},
      onPickerSelect: () => {},
    })
    Picker.show()
  }

  removeLabel = index => () => {
    if (index >= 0) {
      this.setState({
        labels: this.state.labels.filter((_, i) => i !== index),
      })
    }
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
              style={{ alignItems: 'flex-start' }}
              titleWidth="75px"
              title={I18n.t('NewRoom.input.label.title')}
            >
              <LabelContainerView>
                {this.state.labels.length > 0 &&
                  <LabelWrapView>
                    {this.state.labels.map((item, index) => (
                      <Label
                        key={item}
                        title={item}
                        onClose={this.removeLabel(index)}
                      />
                    ))}
                  </LabelWrapView>
                }
                {this.state.initialLabels && <TouchableOpacity
                  onPress={this.showLabelPicker}
                >
                  <LabelPickerText>
                    {I18n.t('NewRoom.input.label.placeholder')}
                  </LabelPickerText>
                </TouchableOpacity>}
              </LabelContainerView>
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
