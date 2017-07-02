import styled from 'styled-components/native'

export const MainButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  width: 100%;
`

export const MainText = styled.Text`
  padding-left: 10px;
  color: #aaaaaa;
  font-weight: 400;
`

export const IconImage = styled.Image`
  resize-mode: contain;
  margin: 2px;
  width: ${props => props.iconSize};
  height: ${props => props.iconSize};
`
export const ChooseImage = styled.Image`
  width: 200px;
  height: 150px;
  resize-mode: contain;
  marginLeft: 20px;
`
