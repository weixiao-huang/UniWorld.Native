import styled, { css } from 'styled-components/native'


export const MainView = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  marginBottom:10px;
  marginTop: 10px;
`
export const WrapView = styled.View`
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  flex: 1;
  align-items: center;
`
export const NoticeText = styled.Text`
  color: #aaaaaa;
  fontSize: 14px;
  width: 100%;
  textAlign: center;
`
export const TriangleView = styled.View`
  margin-top: ${props => (props.reverse ? '0' : '20px')};
  margin-right: ${props => (props.reverse ? '5px' : '0')};
  width: 0px;
  height: 0px;
  background-color: transparent;
  border-style: solid;
  border-left-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${props => (props.reverse ? '#d5d9f0' : 'white')};
  transform: rotate(${props => (props.reverse ? '' : '-')}90deg);
`

export const ContentTouch = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: ${props => (props.reverse ? 'flex-end' : 'flex-start')};
  align-items: ${props => (props.reverse ? 'flex-end' : 'flex-start')};
  borderRadius: 5px;
  flex: 1;
`

export const ContentView = styled.View`
  margin-right: ${props => (props.reverse ? '-3px' : '0')};
  flex-direction: row;
`

export const TitleView = styled.View`
`

export const TitleText = styled.Text`
  fontSize: 12px;
  marginBottom: 2px;
`

export const ContentImage = styled.Image`
  resizeMode: cover;
  width: 160px;
  height: 200px;
`

export const ContentTextView = styled.View`
  background-color: ${props => (props.reverse ? '#d5d9f0' : 'white')};
  margin-top: 4px;
  padding: 8px;
  margin-left: -3px;
  border-radius: 5px;
`

export const ContentText = styled.Text`
`
