import React from 'react'
import styled from 'styled-components/native'
import InputItem from '@/components/InputItem'
import I18n from 'react-native-i18n'

const MainView = styled.View`
`

const ItemText = styled.Text`

`


const Info = ({ user }) => {
  return (
    <MainView>
      <InputItem
        title={I18n.t('Me.info.gender')}
        style={{ justifyContent: 'flex-start' }}
      >
        <ItemText>{user.gender === true ? I18n.t('Gender.male') : user.gender === false ? I18n.t('Gender.female') : 'Secret'}</ItemText>
      </InputItem>
      <InputItem
        title={I18n.t('Me.info.school')}
        style={{ justifyContent: 'flex-start' }}
      >
        <ItemText>{user.university.name_en}</ItemText>
      </InputItem>
      <InputItem
        title={I18n.t('Me.info.department')}
        style={{ justifyContent: 'flex-start' }}
      >
        <ItemText>{user.department}</ItemText>
      </InputItem>
      <InputItem
        title={I18n.t('Me.info.grade')}
        style={{ justifyContent: 'flex-start' }}
      >
        <ItemText>{user.year}</ItemText>
      </InputItem>
    </MainView>
  )
}

export default Info
