import React from 'react'
import styled from 'styled-components/native'

const MainView = styled.View`
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const MainText = styled.Text`
  color: white;
  font-size: 14px;
`

const NavButton = styled.TouchableOpacity`
  background-color: transparent;
`

const NavArea = ({ title1, nav1, title2, nav2 }) => (
  <MainView>
    <NavButton onPress={nav1}>
      <MainText>{title1}</MainText>
    </NavButton>
    <NavButton onPress={nav2}>
      <MainText>{title2}</MainText>
    </NavButton>
  </MainView>
)

export default NavArea
