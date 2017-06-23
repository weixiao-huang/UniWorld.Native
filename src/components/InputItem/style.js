import styled from 'styled-components/native'

export const MainView = styled.View`
  width: 100%;
  background-color: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: #f2f0f4;
  border-bottom-width: 1px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const MainText = styled.Text`
  margin-left: 15px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
  line-height: 44px;
  color: ${props => props.titleColor || '#332f5e'};
  width: ${props => props.titleWidth || 'auto'};
`
