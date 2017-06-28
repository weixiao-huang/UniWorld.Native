import styled from 'styled-components/native'

export const MainView = styled.View`
  flex: 1;
  backgroundColor: white;
`
export const SearchView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  flexDirection: row;
  height: 50px;
  borderBottomWidth: 1px;
  borderBottomColor: #eee;
`
export const SearchInput = styled.TextInput`
  flex: 1;
  backgroundColor: #eee;
  paddingLeft: 10px;
`
export const SearchButton = styled.TouchableOpacity`
`
export const ButtonText = styled.Text`
  marginLeft: 15px;
  marginRight: 15px;
  color: #6485ed;
`
export const ListScrollView = styled.ScrollView`
`
export const NoneView = styled.View`
  flex: 1;
  align-items: center;
`
export const NoneImage = styled.Image`
  resizeMode: contain;
  width: 70%;
`
export const NextButton = styled.TouchableOpacity`
`
export const NextText = styled.Text`
  textAlign: center;
  color: #aaa;
  padding: 10px;
`
export const NextIndicator = styled.ActivityIndicator`
  height: 40px;
`
