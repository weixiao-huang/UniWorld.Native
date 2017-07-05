import styled from 'styled-components/native'
import Spinner from 'react-native-spinkit'

export const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const MainSpinner = styled(Spinner)`
  flex: 10;
`

export const MainText = styled.Text`
  flex: 1;
  color: white;
`
