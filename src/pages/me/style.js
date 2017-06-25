import styled, { css } from 'styled-components/native'
import ScrollTabView from 'react-native-scrollable-tab-view'

const FlexView = css`
  flex: 1;
`

export const MainView = styled.View`
  ${FlexView}
`

export const MainText = styled.Text`
`

export const StyledScrollTabView = styled(ScrollTabView)`
  flex: 2;
`

export const PlaceholderView = styled.View`
  flex: 2;
`
