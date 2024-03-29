import styled from 'styled-components/native'

export const MainView = styled.View`
  align-items: center;
  paddingTop: 20px;
`


export const CoverInnerView = styled.View`
  width: 80px;
  height: 80px;
`

export const CoverImage = styled.Image`
  width: 80px;
  height: 80px;
  resize-mode: cover;
  borderRadius: 40px;
  borderWidth: 3px;
  borderColor: #3555b6;
`

export const CoverTouch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
