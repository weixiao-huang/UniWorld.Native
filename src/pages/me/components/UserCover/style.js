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
`

const avatarSize = 80

export const CoverImage = styled.Image`
  width: ${avatarSize};
  height: ${avatarSize};
  border-radius: 40;
  border-width: 3;
  border-color: white;
`

export const ContentView = styled.View`
  margin-left: 30;
`

export const ContentLineView = styled.View`
  ${RowAlign}
`

export const GenderIconImage = styled.Image`
  width: 20;
  height: 20;
`

export const UsernameText = styled.Text`
  ${TransparentBG}
  margin-left: 10;
  font-size: 20;
  font-weight: bold;
`

export const SignatureText = styled.Text`
  ${TransparentBG}
  margin-top: 5;
`

export const FollowWrapText = styled.Text`
  ${TransparentBG}
  margin-top: 20;
`
