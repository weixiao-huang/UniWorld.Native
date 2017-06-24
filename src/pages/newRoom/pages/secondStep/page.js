import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import _ from 'lodash'
import I18n from '@/locales'

import coverImg from '@/img/customCreate2.png'

import TitleLabelView from './components/TitleLabelView'
import CoverView from './components/CoverView'
import RequiredView from './components/RequiredView'
import OptionsView from './components/OptionsView'

import {
  MainScrollView,
  MainView,
  HeaderImage,
  HeaderText,
  SubmitView,
  StyledButton,
} from './style'


export default class SecondStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUploading: false,
      cover: this.props.cover,
      description: this.props.description,
      date_time_start: this.props.date_time_start,
      date_time_end: this.props.date_time_end,
      location_string: this.props.location_string,
      max_participants: this.props.max_participants,
      isPrivate: this.props.isPrivate,
      welcome: this.props.welcome,
      rewards: this.props.rewards,
      expense: this.props.expense,
    }
  }

  next = () => {
    const {
      navigation: { navigate },
      setDataAction,
    } = this.props
    navigate('Third')
    setDataAction({
      cover: this.state.cover,
      description: this.state.description,
      date_time_start: this.state.date_time_start,
      date_time_end: this.state.date_time_end,
      location_string: this.state.location_string,
      max_participants: this.state.max_participants,
      isPrivate: this.state.isPrivate,
      welcome: this.state.welcome,
      rewards: this.state.rewards,
      expense: this.state.expense,
    })
  }

  isComplete = () => {
    const {
      description, date_time_start, date_time_end,
      location_string, max_participants,
    } = this.state
    return (
      description.length > 0 && date_time_start.length > 0 &&
      date_time_end.length > 0 && location_string.length > 0 &&
      (_.isNumber(max_participants) || isNaN(max_participants))
    )
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
            <RequiredView
              setData={(name, value) => this.setState({ [name]: value })}
              des={this.state.description}
              dateTimeStart={this.state.date_time_start}
              dateTimeEnd={this.state.date_time_end}
              maxParticipants={this.state.max_participants}
              locationString={this.state.location_string}
            />
            <OptionsView
              setData={(name, value) => this.setState({ [name]: value })}
              isPrivate={this.state.isPrivate}
              welcome={this.state.welcome}
              expense={this.state.expense}
              rewards={this.state.rewards}
            />
            <SubmitView>
              <StyledButton
                title={I18n.t('NewRoom.button')}
                disabled={!this.isComplete()}
                onPress={this.next}
              />
            </SubmitView>
          </MainView>
        </MainScrollView>
      </KeyboardAvoidingView>
    )
  }
}
