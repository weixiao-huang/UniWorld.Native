import _ from 'lodash'
import styled from 'styled-components/native'
import { wrap } from '../../style'

export const MainView = styled.View`
  ${wrap}
  width: 100%;
`

export const RequiredTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
  padding-bottom: 10px;
`

export const RequiredTitleImage = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`

export const RequiredTitleText = styled.Text`
  color: #3555b6;
  font-size: 18px;
  padding-left: 10px;
`

export const StyledIntroInput = styled.TextInput`
  flex: 1;
  height: 150px;
  font-size: 14px;
`

export const StyledLocationInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
`

export const MaxTouch = styled.TouchableOpacity`
  flex: 1;
`

export const MaxText = styled.Text`
  font-size: ${props => props.theme.size};
  color: ${props => (
    _.isNumber(props.max) || isNaN(props.max) ?
    'black' : '#c9c9c9'
  )};
`
