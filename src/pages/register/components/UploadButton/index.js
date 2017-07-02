import React from 'react'

import {
  MainButton,
  MainText,
  IconImage,
  ChooseImage,
} from './style'

const UploadButton = props => (

    <MainButton onPress={props.onPress}>
      <IconImage source={props.icon} iconSize={props.iconSize} />
      {props.image ?
        <ChooseImage source={{ uri: props.image }} /> :
        <MainText>
          {props.title}
        </MainText>}
    </MainButton>
  )


UploadButton.defaultProps = {
  inputHeight: 45,
  iconSize: 20,
}

export default UploadButton
