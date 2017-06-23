import styled, { css } from 'styled-components/native'

export const wrap = css`
  margin-top: 10px;
  margin-bottom: 14px;
`

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

export const RequiredView = styled.View`
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

export const IntroInput = styled.TextInput`
  flex: 1;
  height: 150px;
`
