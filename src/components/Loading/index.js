/**
 * Created by huangwx on 27/04/2017.
 */

import React, { PropTypes } from 'react'
import { Modal, Platform } from 'react-native'
import Spinner from 'react-native-spinkit'

import {
  MainView,
} from './style'

const Loading = ({ visible, bgColor, size, color, type }) => (
  <Modal
    transparent
    animationType="fade"
    visible={visible}
  >
    <MainView bgColor={bgColor}>
      <Spinner
        isVisible={visible}
        size={size}
        color={color}
        type={type}
      />
    </MainView>
  </Modal>
)

Loading.defaultProps = {
  bgColor: 'rgba(0, 0, 0, 0.4)',
  size: 50,
  color: '#FFFFFF',
  type: Platform.OS === 'ios' ? 'ArcAlt' : 'WanderingCubes',
}

Loading.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default Loading
