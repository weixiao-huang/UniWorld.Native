import React from 'react'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
import Label from '@/components/Label'

const MainView = styled.View`
  background-color: white;
  padding: 15px;
`
const MainText = styled.Text`
  color: #3555b6;
  font-size: 15px;
  padding-bottom: 5px;
`
const LabelWrapView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

const LabelBox = ({ labels }) => (
  <MainView>
    <MainText>{I18n.t('Room.Info.label')}</MainText>
    <LabelWrapView>
      {labels.map(item => (
        <Label key={item.id} title={item.name_en} close={false} />
      ))}
    </LabelWrapView>
  </MainView>
)

export default LabelBox

