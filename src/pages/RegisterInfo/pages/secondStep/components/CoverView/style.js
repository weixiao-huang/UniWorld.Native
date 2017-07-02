import styled from 'styled-components/native'

export const MainView = styled.View`
  align-items: center;
  paddingTop: 20px;
`


export const CoverInnerView = styled.View`
  width: 80px;
  height: 80px;
  borderRadius: 40px;

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
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`


export const CoverPreviewView = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 20px;
`

export const CoverPreviewImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`
