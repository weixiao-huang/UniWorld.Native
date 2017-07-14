import React from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import I18n from '@/locales'

import {
  MainImage,
} from './style'

const Avatar = ({
  id, avatar, size, onPress, token,
  navigateAction, resetToLoginAction,
}) => (
  <TouchableOpacity
    onPress={onPress || (() => {
      if (token) navigateAction(id)
      else {
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
              onPress: () => {},
            },
          ],
        )
      }
    })}
  >
    <MainImage
      size={size}
      source={{ uri: avatar }}
    />
  </TouchableOpacity>
)

export default Avatar
