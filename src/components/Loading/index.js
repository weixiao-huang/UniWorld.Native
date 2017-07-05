/**
 * Created by huangwx on 27/04/2017.
 */

import React, { PropTypes } from 'react'
import { Modal, Platform } from 'react-native'

import {
  MainView,
  MainText,
  MainSpinner,
} from './style'

const Loading = ({ visible, bgColor, size, color, type, info }) => (
  <Modal
    transparent
    animationType="fade"
    onRequestClose={() => {}}
    visible={visible}
  >
    <MainView bgColor={bgColor}>
      <MainSpinner
        isVisible={visible}
        size={size}
        color={color}
        type={type}
      />
      <MainText>
        { info }
      </MainText>
    </MainView>
  </Modal>
)

Loading.defaultProps = {
  bgColor: 'rgba(0, 0, 0, 0.4)',
  size: 50,
  color: '#FFFFFF',
  type: Platform.OS === 'ios' ? 'ArcAlt' : 'WanderingCubes',
  info: '',
}

Loading.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default Loading
