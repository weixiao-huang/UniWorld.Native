import React, { PropTypes } from 'react'

import {
  MainView,
  MainText,
} from './style'

const InputItem = ({
  title, titleColor, titleWidth, children, style, textStyle,
}) => (
  <MainView style={style}>
    <MainText
      titleColor={titleColor}
      titleWidth={titleWidth}
      style={textStyle}
    >
      {title}
    </MainText>
    {children}
  </MainView>
)

InputItem.propTypes = {
  title: PropTypes.string.isRequired,
}


export default InputItem
