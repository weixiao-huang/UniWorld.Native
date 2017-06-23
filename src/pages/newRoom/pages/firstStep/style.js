import styled from 'styled-components/native'
import Button from '@/components/Button'
import InputItem from '@/components/InputItem'

export const MainScrollView = styled.ScrollView`
`

export const MainView = styled.View`
  padding-top: 20px;
  padding-bottom: 16px;
  background-color: #f2f0f4;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const MainCoverImage = styled.Image`
  resize-mode: contain;
  margin-top: 20px;
  height: 130px;
`

export const MainTitleText = styled.Text`
  color: #3e3974;
  font-size: 28px;
  padding: 16px;
`

export const MainSubTitleText = styled.Text`
  color: #95a8e2;
  font-size: 14px;
  padding: 5px;
`

export const InputWrapView = styled.View`
  margin-top: 30px;
  margin-bottom: 20px;
`

export const TitleInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
`


export const ButtonView = styled.View`
  flex-direction: row;
  flex: 1;
  margin: 16px 20px 0 20px;
`

export const StyledButton = styled(Button)`
  background-color: ${props => (props.active ? '#ec5367' : '#cbcbcb')}
`
