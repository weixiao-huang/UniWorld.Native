import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker'
import { Alert } from 'react-native'
import I18n from '@/locales'
import api from '@/api'
import {
  MainView,
  PlaceholderView,
  StyledScrollTabView,
} from './style'

import UserCover from './components/UserCover'
import UserInfo from './pages/UserInfo/'
import Follow from './pages/Follow/'
import Reputation from './pages/Reputation/'

export default class Me extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUploading: false,
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

  uploadAvatar = () => {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      rotation: true,
      allowsEditing: true,
      cancelButtonTitle: I18n.t('cancel'),
      takePhotoButtonTitle: I18n.t('camera'),
      chooseFromLibraryButtonTitle: I18n.t('photoLibrary'),
      returnBase64Image: true,
      returnIsVertical: false,
    }
    // this.setState({ isUploading: true })
    ImagePicker.showImagePicker(options, async (res) => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        // this.setState({ isUploading: false })
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
        // this.setState({ isUploading: false })
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        // this.setState({ isUploading: false })
      } else {
        this.setState({ isUploading: true })
        const formData = new FormData()
        formData.append('avatar', {
          uri: res.uri,
          name: 'avatar',
        })
        const res2 = await api.upload_avatar(formData)(this.props.token)
        if (res2.status === 200) this.props.fetchMyUserInfoAction()
        this.setState({ isUploading: false })
      }
    })
  }

  render() {

    const { userInfo } = this.props
    return (
      <MainView>
        <UserCover
          userInfo={userInfo}
          uploadAvatar={this.uploadAvatar}
          isUploading={this.state.isUploading}
        />
        {userInfo ?
          <StyledScrollTabView>
            <UserInfo
              tabLabel={I18n.t('Me.info.label')}
              userInfo={userInfo}
            />
            <Follow
              tabLabel={I18n.t('Me.follow.label')}
              follows={userInfo.follows}
            />
            <Reputation
              tabLabel={I18n.t('Me.credit.label')}
              thumbUps={userInfo.p_thumb_ups}
              thumbDowns={userInfo.p_thumb_downs}
            />
          </StyledScrollTabView> :
          <PlaceholderView />
        }
      </MainView>
    )
  }
}
