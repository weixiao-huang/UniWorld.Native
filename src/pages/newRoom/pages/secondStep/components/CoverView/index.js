import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import ImagePicker from 'react-native-image-picker'

import I18n from '@/locales'
import InputItem from '@/components/InputItem'

import {
  MainView,
  CoverOuterView,
  CoverInnerView,
  CoverTouch,
  CoverPlaceholderText,
  CoverPreviewImage,
  CoverPreviewView,
} from './style'

const CoverView = ({
  cover, isUploading, onChangeCover, onChangeUpload,
}) => {
  const showImgPicker = () => {
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
    onChangeUpload(true)
    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        // console.log('User cancelled image picker')
        onChangeUpload(false)
      } else if (res.error) {
        // console.log('ImagePicker Error: ', res.error)
        onChangeUpload(false)
      } else if (res.customButton) {
        // console.log('User tapped custom button: ', res.customButton)
        onChangeUpload(false)
      } else {
        if (res.fileSize > 5e6) {
          Alert.alert(
            I18n.t('Alert.ImageSize.title'),
            I18n.t('Alert.ImageSize.content'),
            [
              {
                text: I18n.t('Alert.ImageSize.confirm'),
                onPress: () => {
                  showImgPicker()
                },
              },
              {
                text: I18n.t('Alert.ImageSize.cancel'),
                onPress: () => onChangeUpload(false),
              },
            ],
          )
          return
        }
        const img = { uri: res.uri }
        // You can also display the image using data:
        // this.setState({ cover: 'data:image/jpeg;base64,' + res.data })

        onChangeUpload(false)
        onChangeCover(img.uri)
      }
    })
  }

  return (
    <MainView>
      <InputItem
        title={I18n.t('NewRoom.input.second.Cover.title')}
        titleWidth="75px"
      >
        <CoverOuterView>
          <CoverInnerView>
            <CoverTouch
              onPress={showImgPicker}
            >
              <CoverPlaceholderText>
                {I18n.t('NewRoom.input.second.Cover.placeholder')}
              </CoverPlaceholderText>
              <ActivityIndicator
                animating={isUploading}
              />
              <Icon name="camera" size={20} />
            </CoverTouch>
            {!!cover && <CoverPreviewView>
              <CoverPreviewImage
                source={{ uri: cover }}
              />
            </CoverPreviewView>}
          </CoverInnerView>
        </CoverOuterView>
      </InputItem>
    </MainView>
  )
}

CoverView.propTypes = {
  cover: PropTypes.string.isRequired,
  isUploading: PropTypes.bool.isRequired,
  onChangeCover: PropTypes.func.isRequired,
  onChangeUpload: PropTypes.func.isRequired,
}

export default CoverView
