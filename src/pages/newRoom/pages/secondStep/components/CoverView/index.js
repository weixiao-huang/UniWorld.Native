import React, { PropTypes } from 'react'
import { ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

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
