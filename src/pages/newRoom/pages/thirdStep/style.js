import styled from 'styled-components/native'
import InputItem from '@/components/InputItem'
import Button from '@/components/Button'

export const MainScrollView = styled.ScrollView`
  flex: 1;
  background-color: #f2f0f4;
`

export const MainView = styled.View`
  flex: 1;
`
export const RequiredTitleView = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
`

export const RequiredTitleImage = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`

export const RequiredTitleText = styled.Text`
  color: ${props => props.color || '#ec5367'};
  font-size: 18px;
  padding-left: 10px;
  font-weight: 400;
`

export const WrapView = styled.View`
  background-color: white;
`
export const InfoBoxView = styled.View`
  background-color: white;
`
export const ItemView = styled.View`
  paddingRight: 15px;
`
export const StyledItem = styled(InputItem)`
  justifyContent: space-between;
  paddingRight: 20px;
`
export const RightText = styled.Text`
`
export const WrapText = styled.Text`
  fontSize: 18px;
  paddingLeft: 10px;
`
export const StyledButton = styled(Button)`
  align-self:center;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  width: 84%;
  background-color: ${props => (props.disabled ? '#cbcbcb' : '#ec5367')}
`
