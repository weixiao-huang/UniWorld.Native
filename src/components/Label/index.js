import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

import {
  MainView,
  TriangleView,
  MainTitleView,
  MainTitleText,
} from './style'

const Label = ({ title, onClose }) => (
  <MainView>
    <TriangleView />
    <MainTitleView>
      <MainTitleText onClose={onClose}>
        {title}
      </MainTitleText>
      {!!onClose && <TouchableOpacity onPress={onClose}>
        <Icon
          name="close"
          size={22}
          style={{ paddingTop: 3 }}
          color="white"
        />
      </TouchableOpacity>}
    </MainTitleView>
  </MainView>
)

export default Label
