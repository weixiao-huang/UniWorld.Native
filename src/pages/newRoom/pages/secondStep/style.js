import styled from 'styled-components/native'

export const MainScrollView = styled.ScrollView`
`

export const MainView = styled.View`
  padding-top: 20px;
  background-color: ${props => props.theme.gray};
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const HeaderImage = styled.Image`
  resize-mode: contain;
  height: 150px;
`

export const HeaderText = styled.Text`
  color: #95a8e2;
  font-size: 18px;
  padding: 18px;
`
