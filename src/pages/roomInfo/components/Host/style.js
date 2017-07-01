import styled from 'styled-components/native'
import Button from '@/components/Button'

export const MainView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  flex-direction: row;

`
export const InfoView = styled.View`
  width: 60%;
  padding: 20px;
  align-items: center
  flex-direction: row;
`
export const NameView = styled.View`
  padding-left: 15px;
`
export const NameText = styled.Text`
  font-size: 20px;
  margin-bottom: 14px;
  font-weight:bold;
`
export const SignText = styled.Text`
  fontSize: 14px;
  color: #808080;
`
export const FollowButton = styled(Button)`
  width: 116px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #ec5367;
  border-radius: 10px;
  margin-right: 15px;
`
