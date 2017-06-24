import React from 'react'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
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
    {Object.values(options).map((item, index) => (
      item.content ?
        <OptionView key={index}>
          <OptionIcon name={item.iconName} size={20} />
          <OptionText>{item.content}</OptionText>
        </OptionView> : null
    ))}
  </MainView>
)

export default Option
