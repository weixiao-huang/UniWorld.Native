import styled from 'styled-components/native'

export const MainView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const ItemTouch = styled.TouchableOpacity`
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ItemImage = styled.Image`
  resize-mode: contain;
  width: 40px;
  height: 40px;
  align-self: center;

`

export const ItemText = styled.Text`
  margin-top: 5px;
  align-self: center;
  font-size: 16px;
`
