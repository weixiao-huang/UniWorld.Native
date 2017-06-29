import styled from 'styled-components/native'

export const MainView = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  padding: 10px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: white;
  border-radius: 5px;
  align-items: center;
`

export const MainInput = styled.TextInput`
  flex: 1;
  padding-left: 10px;
`

export const IconImage = styled.Image`
  resize-mode: contain;
  margin: 2px;
  width: ${props => props.iconSize};
  height: ${props => props.iconSize};
`
