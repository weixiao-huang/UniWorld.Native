import React, { PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'

import {
  MainView,
  MainImage,
} from './style'

const Avatar = ({
  id, avatar, size, onPress,
  navigateAction,
}) => (
  <TouchableOpacity
    onPress={onPress || (() => navigateAction(id))}
  >
    <MainImage
      size={size}
      source={{ uri: avatar }}
    />
  </TouchableOpacity>
)

export default Avatar
