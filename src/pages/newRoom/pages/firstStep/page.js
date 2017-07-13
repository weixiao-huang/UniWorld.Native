import React, { Component } from 'react'
import { TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import Picker from 'react-native-picker'
import I18n from '@/locales'
import { createInitialLabels } from '@/utils'

import InputItem from '@/components/InputItem'
import Loading from '@/components/Loading'
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

  componentDidUpdate() {
    const {
      alert, resetToLoginAction, goBackAction,
    } = this.props
    if (alert) {
      Alert.alert(
        I18n.t('Alert.Login.title'),
        I18n.t('Alert.Login.content'),
        [
          {
            text: I18n.t('Alert.Login.confirm'),
            onPress: () => resetToLoginAction(),
          },
          {
            text: I18n.t('Alert.Login.cancel'),
            onPress: () => goBackAction(),
          },
        ],
      )
    }
  }

  next = () => {
    const {
      navigation: { navigate },
      setDataAction,
    } = this.props
    navigate('Second')
    setDataAction({
      title: this.state.title,
      labels: this.state.labels,
    })
  }

  isCompleted = () => this.state.title.length > 0

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
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={50}
        >
          <MainView>
            <Loading visible={this.props.creating} />
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
                  maxLength={30}
                  placeholder={I18n.t('NewRoom.input.name.placeholder')}
                  onChangeText={title => this.setState({ title })}
                  defaultValue={this.props.title}
                />
              </InputItem>
              <InputItem
                title={I18n.t('NewRoom.input.label.title')}
                style={{ alignItems: 'flex-start' }}
                titleWidth="75px"
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
        </KeyboardAvoidingView>
      </MainScrollView>
    )
  }
}
