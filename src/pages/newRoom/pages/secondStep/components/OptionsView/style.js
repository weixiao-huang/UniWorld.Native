import styled from 'styled-components/native'
import { wrap } from '../../style'

export const MainView = styled.View`
  ${wrap}
  width: 100%;
`

export const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
  padding-bottom: 10px;
`

export const TitleImage = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`

export const TitleText = styled.Text`
  color: #ec5367;
  font-size: 18px;
  padding-left: 10px;
`

export const SwitchText = styled.Text`
  flex: 1;
  color: ${props => props.theme.textGray};
  font-size: ${props => props.theme.size};
`

export const StyledSwitch = styled.Switch`
  margin-right: 10px;
`

export const StyledInput = styled.TextInput`
  flex: 1;
  font-size: 14px;

`
