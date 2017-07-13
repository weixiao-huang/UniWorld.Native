import styled from 'styled-components/native'
import Button from '@/components/Button'

export const MainView = styled.View`
  paddingTop: 100px;
  align-items: center;
  flex: 1;
  flexDirection: column;
`

export const MainImage = styled.Image`
  resizeMode: contain;
  height: 200px;
  marginBottom: 30px;
`

export const MainText = styled.Text`
  color: #95a8e2;
  fontSize: 16px;
  padding: 5px;
  fontWeight: 500;
  lineHeight: 24px;
  backgroundColor: transparent;
`

export const MainButton = styled(Button) `
  marginTop: 30px;
  borderRadius: 5px;
  padding: 5px;
  backgroundColor: #ec5367;
  width: 80%;
`
