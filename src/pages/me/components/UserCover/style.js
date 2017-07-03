import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'

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
  paddingLeft: 20px;
  paddingTop: 20px;
  justify-content: center;
  flex: 1;
  align-items: center;
`

export const CoverImage = styled.Image`
  width: ${Dimensions.get('window').width * 0.2}px;
  height: ${Dimensions.get('window').width * 0.2}px;
  border-radius: ${Dimensions.get('window').width * 0.1}px;
  border-width: 3px;
  border-color: white;
`

export const ContentView = styled.View`
  margin-left: ${Dimensions.get('window').width * 0.05}px;
  width: ${Dimensions.get('window').width * 0.65}px;
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
