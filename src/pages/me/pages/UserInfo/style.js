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

export const PickerTouch = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`

export const PickerText = styled.Text`
  color: ${props => (props.isPlaced ? 'black' : '#c7c7cd')};
`

export const StyledButton = styled(Button)`
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: #e9e9ef;
`

export const StyledInput = styled.TextInput`
  flex: 1;
  flex-direction: row;
  font-size: 14px;
`

export const StyledLogoutButton = styled(Button)`
  background-color: transparent;
`
