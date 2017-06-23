import styled from 'styled-components/native'
import { wrap } from '../../style'

export const MainView = styled.View`
  ${wrap}
`

export const CoverOuterView = styled.View`
  flex: 1;
  flex-direction: row;
`

export const CoverInnerView = styled.View`
  flex: 1;
  margin-right: 20px;
`

export const CoverTouch = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin: 4px;
  align-items: center;
  justify-content: space-between;
`

export const CoverPlaceholderText = styled.Text`
  color: #c7c7c7;
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
