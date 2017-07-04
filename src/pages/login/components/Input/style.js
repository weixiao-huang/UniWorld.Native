import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const MainView = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: ${Platform.OS === 'ios' ? '10px' : '0'} 10px;
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
