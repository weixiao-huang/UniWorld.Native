import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const MainView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
`

export const ItemTouch = styled.TouchableOpacity`
  padding-top: 25px;
  padding-bottom: 25px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: ${Dimensions.get('window').width / 4}px;
`

export const ItemImage = styled.Image`
  resize-mode: contain;
  width: 40px;
  height: 40px;
  align-self: center;

`

export const ItemText = styled.Text`
  margin-top: 5px;
  text-align: center;
  align-self: center;
  font-size: 12px;
`
