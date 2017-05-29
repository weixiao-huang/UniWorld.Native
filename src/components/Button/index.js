import React, { PropTypes } from 'react'

import {
  MainTouch,
  MainText,
} from './style'

const Button = ({ onPress, disabled, title, inlineStyle, textStyle }) => (
  <MainTouch
    onPress={onPress}
    disabled={disabled}
    style={inlineStyle}
  >
    <MainText style={textStyle}>{title}</MainText>
  </MainTouch>
)

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default Button
