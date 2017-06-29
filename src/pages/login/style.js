import styled, { css } from 'styled-components/native'
import Toast from 'react-native-easy-toast'
import Button from '@/components/Button'

const FlexView = css`
  flex: 1;
`

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`

export const MainView = styled.View`
  ${FlexView}
`

export const MainText = styled.Text`
`

export const BackgroundView = styled.View`
  ${FlexCenter}
  height: 96%;
  margin: 10px 40px;
`

export const LogoImage = styled.Image`
  width: 130px;
  height: 130px;
  margin-bottom: 60px;
`

export const StyledButton = styled(Button)`
  margin-top: 10px;
`

export const StyledToast = styled(Toast)`
`
