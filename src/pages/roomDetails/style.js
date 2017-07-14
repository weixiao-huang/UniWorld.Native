import styled, { css } from 'styled-components/native'
import ScrollTabView from 'react-native-scrollable-tab-view'


export const MainScrollTabView = styled(ScrollTabView)`
  flex: 1;
`

export const MainText = styled.Text`
`

export const MainView = styled.View`
  flex: 1;
`

export const SocketBreakView = styled.View`
  flex-direction: row;
  background-color: rgba(254, 172, 78, 0.8);
  justify-content: center;
  align-items: center;
  height: 30px;
`

export const SocketBreakText = styled.Text`
  color: #414755;
  padding-left: 10px;
  font-size: 14px;
`
