import React from 'react'
import PropTypes from 'prop-types'

import {
  MainView,
  CoverInnerView,
  CoverTouch,
  CoverImage,
} from './style'

const CoverView = ({ cover, showImgPicker }) => (
  <MainView>
    <CoverInnerView>
      <CoverTouch onPress={showImgPicker} >
        <CoverImage source={{ uri: cover }} />
      </CoverTouch>
    </CoverInnerView>
  </MainView>
)

CoverView.propTypes = {
  cover: PropTypes.string.isRequired,
  showImgPicker: PropTypes.func.isRequired,
}

export default CoverView
