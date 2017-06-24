import styled, { css } from 'styled-components/native'
import Button from '@/components/Button'

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

export const SubmitView = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
`

export const StyledButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: ${props => (props.disabled ? '#cbcbcb' : '#ec5367')}
`
