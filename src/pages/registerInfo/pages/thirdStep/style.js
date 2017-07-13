import styled from 'styled-components/native'
import Button from '@/components/Button'

export const MainScrollView = styled.ScrollView`
  flex: 1;
  textAlign: center;
  padding: 15px;
  paddingBottom: 5px;
  backgroundColor: transparent;
`

export const MainView = styled.View`
  flex :1;
  align-items: center;
`

export const MainText = styled.Text`
  color: #3555b6;
  fontWeight: 500;
`
export const MainButton = styled(Button) `
  marginBottom: 30px;
  borderRadius: 5px;
  padding: 5px;
  backgroundColor: #ec5367;
  width: 100%;
`

