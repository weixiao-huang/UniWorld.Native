import styled from 'styled-components/native'

export const UpperView = styled.View`
  width:100%;
  height: 56%;
`

export const MainModal = styled.Modal`
`

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  height: 44%;
  backgroundColor: rgba(0, 0, 0, 0.3);
`

export const HearderView = styled.View`
  justifyContent: space-between;
  flexDirection: row;
  backgroundColor: #eee;
  height: 43px;
  padding: 10px;
`

export const HeaderLeftView = styled.View`
  flexDirection: row;
  alignItems: center;
`

export const HeaderImage = styled.Image`
  width: 16px;
  height: 16px;
  resizeMode: cover;
  marginRight: 10px;
`

export const HeaderText = styled.Text`
  fontSize: 16px;
  fontWeight: 600;
  color: #332f5e;
`

export const CancelButton = styled.TouchableOpacity`
  flexDirection: row;
  alignItems: center;
`

export const CancelText = styled.Text`
  color: #bcbcbc;
`

export const InputView = styled.View`
  backgroundColor: white;
  paddingLeft: 10px;
  height: 200px;
`

export const TextInput = styled.TextInput`
  width: 100%;
  fontSize: 16px;
`

export const BtnWrapView = styled.View`
  flexDirection: row;
  background-color: white;
  height: 50px;
  width: 100%;
`

export const SelectButton = styled.TouchableOpacity`
  alignItems: center;
  justifyContent: center;
  flex: 1;
  background-color: ${props => props.bgColor || 'white'};
`

export const SelectImage = styled.Image`
  width: 16px
  height: 16px;
  resizeMode: cover;
`

export const SelectText = styled.Text`
  color: white;
`
