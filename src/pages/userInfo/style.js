import styled, { css } from 'styled-components/native'
import Button from '@/components/Button'

export const MainScrollView = styled.ScrollView`
  flex: 2;
`

export const MainText = styled.Text`
`

export const MainView = styled.View`
  height: 100%;
`

export const ButtonView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`

export const StyledButton = styled(Button)`
  background-color: ${props => (props.isFollowed ? '#c4caf2' : 'white')};
  border-radius: 0;

`
