import React from 'react'
import PropTypes from 'prop-types'

import {
  MainTouch,
  MainText,
} from './style'

const Button = ({ onPress, disabled, title, style, textStyle }) => (
  <MainTouch
    onPress={onPress}
    disabled={disabled}
    style={style}
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
