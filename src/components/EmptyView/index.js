import styled from 'styled-components/native'

export default styled.View`
  height: ${props => props.height || '6px'};
  background-color: ${props => props.color || 'transparent'};
  width: 100%;
`
