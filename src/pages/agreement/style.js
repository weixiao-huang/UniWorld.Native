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
  color: white;
  fontWeight: 500;
`
export const MainButton = styled(Button) `
  marginBottom: 30px;
  borderRadius: 5px;
  padding: 5px;
  backgroundColor: #a55b7d;
  width: 100%;
`

