import styled, { css } from 'styled-components/native'
import styled2 from 'styled-components'
import Button from '@/components/Button'

const FlexView = css`
  flex: 1;
`

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`

export const MainView = styled.ScrollView`
  ${FlexView}
`

export const MainText = styled.Text`

`

export const BackgroundView = styled.View`
  ${FlexView}
  ${FlexCenter}
  margin: 20px 40px;
  paddingBottom: 60px;
`

export const LogoImage = styled.Image`
  marginTop: 20px;
  width: 130px;
  height: 130px;
  margin-bottom: 40px;
`

export const StyledButton = styled(Button)`
  margin-top: 10px;
`
