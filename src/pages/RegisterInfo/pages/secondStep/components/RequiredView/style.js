import _ from 'lodash'
import styled from 'styled-components/native'
import { wrap } from '../../style'

export const MainView = styled.View`
  ${wrap}
  align-items: flex-start;
  width: 100%;
  paddingLeft: 15px;
  paddingRight: 15px;
`
export const MainText = styled.Text`
  color: #3555B6;
  fontSize: 16px;
  paddingTop: 22px;
  fontWeight: bold;
  background-color: transparent;
  marginBottom: 5px;
`

export const InputView = styled.View`
  borderBottomWidth: 1px;
  borderBottomColor: #3555b6;
  width: 100%;
  height: 28px;
`

export const StyledInput = styled.TextInput`
  background-color: transparent;
  flex: 1;
  font-size: 16px;
`

export const GenderTouch = styled.TouchableOpacity`
  flex: 1;
`

export const YearTouch = styled.TouchableOpacity`
  background-color: transparent;
  flex: 1;
  font-size: 16px;
`


export const YearText = styled.Text`
  font-size: ${props => props.theme.size};
  color: ${props => (
    _.isNumber(props.year) || isNaN(props.year) ?
    'black' : '#c9c9c9'
  )};
`

export const GenderText = styled.Text`
  font-size: ${props => props.theme.size};
`
