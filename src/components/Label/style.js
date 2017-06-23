import styled from 'styled-components/native'

const labelBgColor = '#fbc6c7'
const labelWidth = 12
const paddingLeft = labelWidth / 2
const marginLeft = -paddingLeft
const textPadding = paddingLeft / 2
const textColor = 'rgba(255, 50, 50, 1)'

export const MainView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 2px;
`

export const TriangleView = styled.View`
  width: 0;
  height: 0;
  background-Color: transparent;
  border-style: solid;
  border-left-width: ${labelWidth}px;
  border-right-width: ${labelWidth}px;
  border-bottom-width: ${labelWidth}px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${labelBgColor};
  transform: rotate(-90deg);
`

export const MainTitleView = styled.View`
  flex-direction: row;
  background-color: ${labelBgColor};
  height: 100%;
  align-items: center;
  margin-left: ${marginLeft}px;
`

export const MainTitleText = styled.Text`
  color: ${textColor};
  padding-left: ${paddingLeft}px;
  padding-top: ${textPadding}px;
  padding-bottom: ${textPadding}px;
  line-height: 18px;
  padding-right: ${props => (props.onClose ? '0' : '10px')};
`
