import React from 'react'

import {
  MainView,
  MainInput,
  IconImage,
} from './style'

const Input = props => (
  <MainView>
    <IconImage source={props.icon} iconSize={props.iconSize} />
    <MainInput
      inputHeight={props.inputHeight}
      autoCorrect={false}
      autoCapitalize="none"
      {...props}
    />
  </MainView>
)

Input.defaultProps = {
  inputHeight: 45,
  iconSize: 20,
}

export default Input
