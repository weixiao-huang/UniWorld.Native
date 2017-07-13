import styled from 'styled-components/native'

export const MainView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const ItemView = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  backgroundColor: #ffffff;
  width: 40%;
  border-radius: 6px;
  opacity: 0.6;
`

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #bcbcbc;
  text-align: center;
  line-height: 20px;
  marginLeft: 5px;
`

export const ButtonImage = styled.Image`
  width: 42px;
  height: 42px;
  resize-mode: contain;
`

export const ButtonImage2 = styled.Image`
  width: 42px;
  height: 38px;
  resize-mode: contain;
  marginTop: 2px;
`
