import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MainView = styled.View`
  background-color: white;
`

const OptionView = styled.View`
  flex-direction: row;
  flex-wrap:wrap;
  border-bottom-width: 1px;
  padding: 15px;

  alignItems: center;
  borderBottomColor: #e9e9ef;
`
const OptionText = styled.Text`
  font-size: 14px;
`

const OptionIcon = styled(Icon)`
  color: #ea5569;
  padding-right: 10px;
`

const Option = ({ options }) => (
  <MainView>
    {Object.values(options).map(item => (
      !!item.content && (<OptionView key={item.iconName}>
        <OptionIcon name={item.iconName} size={20} />
        <OptionText>{item.content}</OptionText>
      </OptionView>)
    ))}
  </MainView>
)

export default Option
