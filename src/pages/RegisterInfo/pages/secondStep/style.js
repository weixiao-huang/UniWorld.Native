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

export const SubmitView = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
`

export const StyledButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: ${props => (props.disabled ? '#cbcbcb' : '#ec5367')}
`

export const AgreementButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-bottom-color:#3555b6;
  width: 50%;
  background-color: transparent;
`
