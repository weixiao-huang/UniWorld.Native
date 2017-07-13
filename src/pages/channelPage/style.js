import styled from 'styled-components/native'

export const MainView = styled.View`
  flex: 1;
  backgroundColor: white;
`

export const MainScrollView = styled.ScrollView`
  flex: 1;
`

export const CoverImage = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
  height: 112.5px;
  width: 90%;
  border-radius: 16px;
`

export const ListScrollView = styled.ScrollView`
`

export const NoneView = styled.View`
  flex: 1;
  align-items: center;
`

export const NoneImage = styled.Image`
  resizeMode: contain;
  width: 70%;
`

export const NextButton = styled.TouchableOpacity`
`

export const NextText = styled.Text`
  textAlign: center;
  color: #aaa;
  padding: 10px;
`

export const NextIndicator = styled.ActivityIndicator`
  height: 40px;
`
