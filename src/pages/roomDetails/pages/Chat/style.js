import styled from 'styled-components/native'
import Button from '@/components/Button'

export const MainView = styled.View`
  flex: 1;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`

export const FooterContainerView = styled.View`
  width: 100%;
`

export const FooterView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f2f0f5;
  padding: 10px;
  height: 60px;
`

export const FooterIconImage = styled.Image`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`

export const FooterInput = styled.TextInput`
  background-color: white;
  flex: 1;
  height: 100%;
  margin-left: 10px;
  border-width: 1px;
  border-color: #ebeaea;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
`

const plusSize = 38
const plusFontSize = 24
export const FooterPlusTouch = styled.TouchableOpacity`
  background-color: #fe586f;
  height: ${plusSize}px;
  width: ${plusSize}px;
  border-radius: ${plusSize / 2}px;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`

export const FooterPlusText = styled.Text`
  color: white;
  font-size: ${plusFontSize}px;
  line-height: ${plusFontSize}px;
`

export const TestView = styled.View`
`

export const TestText = styled.Text`
`

export const SocketBreakView = styled.View`
  flex-direction: row;
  background-color: #d7d5da;
  justify-content: center;
  align-items: center;
  height: 30px;
`

export const SocketBreakText = styled.Text`
  color: white;
  padding-left: 10px;
  font-size: 14px;
`
