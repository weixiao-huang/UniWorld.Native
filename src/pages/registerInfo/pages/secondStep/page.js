import React, { Component } from 'react'
import { KeyboardAvoidingView, Alert } from 'react-native'
import api from "@/api"
import _ from 'lodash'
import I18n from '@/locales'
import ImagePicker from 'react-native-image-picker'
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

  uploadAvatar = async () => {
    let formData = new FormData()
    formData.append('avatar', {
      uri: this.state.avatar,
      name: 'avatar',
    })
    const res2 = await api.upload_avatar(formData)(this.props.token)
    if (res2.status === 200) {
      console.log('success')
    }
  }

  next = () => Alert.alert(
    I18n.t('Me.info.Edit.registerTitle'),
    I18n.t('Me.info.Edit.registerContent'),
    [
      {
        text: I18n.t('confirm'),
        onPress: async () => {
          const { name, gender, department, year, signature } = this.state
          const data = {
            name,
            department,
            signature,
            year,
            gender,
          }
          let formData = new FormData()
          formData.append('avatar', {
            uri: this.state.avatar,
            name: 'avatar',
          })
          this.props.putAction(data)
          const res2 = await api.upload_avatar(formData)(this.props.token)
          if (res2.status === 200) {
            console.log(res2)
          }
        },
      },
      {
        text: I18n.t('cancel'),
        onPress: () => { },
      },
    ],
  )

  agreement = () => {
    const {
      navigation: { navigate },
    } = this.props
    navigate('Third')
  }

  showImgPicker = () => {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      returnBase64Image: true,
      returnIsVertical: false,
    }
    this.setState({ isUploading: true })
    ImagePicker.showImagePicker(options, async res => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        this.setState({ isUploading: false })
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
        this.setState({ isUploading: false })
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        this.setState({ isUploading: false })
      } else {
        this.setState({
          avatar: res.uri,
          isUploading: false,
        })
      }
    })
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
              showImgPicker={this.showImgPicker}
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
