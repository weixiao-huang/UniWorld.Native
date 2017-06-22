import React, { PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'

import {
  MainView,
  MainImage,
} from './style'

const Avatar = ({ id, avatar, size, onPress }) => {
  const gotoUser = id => () => {

  }
  return (
    <TouchableOpacity onPress={onPress && gotoUser(id)}>
      <MainImage
        size={size}
        source={{ uri: avatar }}
      />
    </TouchableOpacity>
  )
}

Avatar.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
}

Avatar.defaultProps = {
  size: 70,
}

export default Avatar
