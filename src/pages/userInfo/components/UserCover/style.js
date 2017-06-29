import styled, { css } from 'styled-components/native'

const TransparentBG = css`
  background-color: transparent;
  color: white;
`

const RowAlign = css`
  flex-direction: row;
  align-items: center;
`

export const MainView = styled.View`
  ${RowAlign}
  justify-content: center;
  flex: 1;
`

const avatarSize = 80

export const CoverModal = styled.Modal`
`
export const CoverTouch = styled.TouchableWithoutFeedback`
  flex: 1;
  align-items: center;
  justify-content:center;
  background-color: black;
`
export const ModalImage = styled.Image`
  resize-mode: contain;
  height: 100%;
  width: 100%;
  background-color: black;
`

export const CoverImage = styled.Image`
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  border-radius: 40px;
  border-width: 3px;
  border-color: white;
`

export const ContentView = styled.View`
  margin-left: 30px;
`

export const ContentLineView = styled.View`
  ${RowAlign}
`

export const GenderIconImage = styled.Image`
  width: 20px;
  height: 20px;
`

export const UsernameText = styled.Text`
  ${TransparentBG}
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
`

export const SignatureText = styled.Text`
  ${TransparentBG}
  margin-top: 5px;
`

export const FollowWrapText = styled.Text`
  ${TransparentBG}
  margin-top: 20px;
`
