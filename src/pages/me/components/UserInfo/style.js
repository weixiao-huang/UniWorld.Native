import styled, { css } from 'styled-components/native'
import InputItem from '@/components/InputItem'
import Button from '@/components/Button'

export const MainView = styled.View`
`

export const MainScrollView = styled.ScrollView`
`

export const ItemText = styled.Text`
  font-size: 14px;
  fontWeight: normal;
`

export const StyledInputItem = styled(InputItem) `
  justify-content: flex-start;
  padding-top: 3px;
  padding-bottom: 3px;
`

export const StyledEditButton = styled(Button)`
  background-color: white;
`

export const StyledLogoutButton = styled(Button)`
  background-color: transparent;
`
