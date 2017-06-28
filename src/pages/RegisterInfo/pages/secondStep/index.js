import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import _ from 'lodash'
import I18n from '@/locales'

import bgUrl from '@/img/image/signInfoBg.png'
import CoverView from './components/CoverView'
import RequiredView from './components/RequiredView'
import BackgroudImage from '@/components/BackgroundImage'

import {
  MainScrollView,
  AgreementButton,
  SubmitView,
  StyledButton,
} from './style'


export default class SecondStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUploading: false,
      avatar: '',
      nickname: '',
      department: '',
      year: '',
      signature: '',
      gender: '',
    }
  }

  next = () => {
  //发送注册信息，进入广场
  }

  agreement = () => {
    const {
      navigation: { navigate },
    } = this.props
    navigate('Third')
  }


  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <MainScrollView>
          <BackgroudImage
            bgUrl={bgUrl}
          >
            <CoverView
              cover={this.state.avatar}
              isUploading={this.state.isUploading}
              onChangeUpload={isUploading => this.setState({ isUploading })}
              onChangeCover={avatar => this.setState({ avatar })}
            />
            <RequiredView
              setData={(name, value) => this.setState({ [name]: value })}
              signature={this.state.signature}
              department={this.state.department}
              year={this.state.year}
              nickname={this.state.nickname}
              gender={this.state.gender}
            />
            <SubmitView>
              <AgreementButton
                title={I18n.t('SignInfo.second.agreement')}
                onPress={this.agreement}
                textStyle={{ color: '#3555b6', paddingBottom: 0 }}
              />
              <StyledButton
                title={I18n.t('SignInfo.second.continue')}
                onPress={this.next}
              />
            </SubmitView>
          </BackgroudImage>
        </MainScrollView>
      </KeyboardAvoidingView>
    )
  }
}
