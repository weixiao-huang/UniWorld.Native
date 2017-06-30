import styled from 'styled-components/native'
import Button from '@/components/Button'

export const MainView = styled.View`
  flex-direction: row;
  background-color: white;
  position: absolute;
  bottom: 0;
`

export const LeaveButton = styled(Button) `
  flex: 1;
  background-color: #3555b6;
  border-radius: 0;
  padding: 5px 0;
`
export const JoinButton = styled(Button) `
  flex: 2;
  background-color: #ec5367;
  border-radius: 0;
`

