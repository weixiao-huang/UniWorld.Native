import styled from 'styled-components/native'

export const MainView = styled.View`
`

export const MainImage = styled.Image`
  border-width: 1px;
  border-color: #ec5367;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
`
