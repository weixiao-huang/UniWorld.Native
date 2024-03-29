import styled, { css } from 'styled-components/native'
import ScrollTabView from 'react-native-scrollable-tab-view'

const FlexView = css`
  flex: 1;
`

export const MainView = styled.View`
  ${FlexView}
  background-color: white;
`
export const MainText = styled.Text`

`
export const StyledScrollTabView = styled(ScrollTabView)`
  flex: 2;
`
