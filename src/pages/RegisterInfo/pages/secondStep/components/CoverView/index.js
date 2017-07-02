import React, { PropTypes } from 'react'
import { ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import {
  MainView,
  CoverInnerView,
  CoverTouch,
  CoverPreviewImage,
  CoverPreviewView,
  CoverImage,
} from './style'

const CoverView = ({ cover, isUploading, showImgPicker
}) => {

  return (
    <MainView>
      <CoverInnerView>
        <CoverTouch onPress={showImgPicker} >
          <ActivityIndicator animating={isUploading} />
          <CoverImage source={{ uri: cover }} />
        </CoverTouch>
        {!!cover && <CoverPreviewView>
          <CoverPreviewImage source={{ uri: cover }} />
        </CoverPreviewView>}
      </CoverInnerView>
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
