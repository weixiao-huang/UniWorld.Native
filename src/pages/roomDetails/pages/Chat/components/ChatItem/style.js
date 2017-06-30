import styled from 'styled-components/native'

export const MainView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
`
export const WrapView = styled.View`
  flex-direction: row;
  align-items: center;
`
export const TriangleView = styled.View`
  marginTop: 20px;
  width: 0px;
  height: 0px;
  backgroundColor: transparent;
  borderStyle: solid;
  borderLeftWidth: 5px;
  borderRightWidth: 5px;
  borderBottomWidth: 5px;
  borderLeftColor: transparent;
  borderRightColor: transparent;
  borderBottomColor: white;
  transform: rotate(-90deg);
  ]
}
`
export const ContentView = styled.View`
  flex-direction: column;
  flex: 1;
  alignItems: flex-start;
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
export const ContentText = styled.Text`
  marginTop: 4px;
  backgroundColor: white;
  padding: 8px;
  marginLeft: -3px;
  borderRadius: 5px;
`
