import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const MainScrollView = styled.ScrollView`
  background-color: white;
`

export const EmptyImageView = styled.View`
  justify-content: center;
  align-items: center;
`

export const EmptyImage = styled.Image`
  resize-mode: contain;
  width: ${Dimensions.get('window').width * 0.6}px;
  justify-content: center;
  align-items: center;
`

export const HistoryText = styled.Text`
  text-align: center;
  color: #aaa;
  padding: 1px;
`
