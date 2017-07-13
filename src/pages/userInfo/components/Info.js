/*
  Component: Info
*/

import React from 'react'
import styled from 'styled-components/native'
import InputItem from '@/components/InputItem'
import I18n from 'react-native-i18n'

const MainScrollView = styled.ScrollView`
`

const ItemText = styled.Text`
`

const StyledInputItem = styled(InputItem)`
  justify-content: flex-start;
`

export default ({ user }) => (
  <MainScrollView>
    <StyledInputItem
      title={I18n.t('Me.info.gender')}
    >
      <ItemText>
        {user.gender === true ?
          I18n.t('Gender.male') :
          (user.gender === false ?
            I18n.t('Gender.female') :
            'Secret')}
      </ItemText>
    </StyledInputItem>
    <StyledInputItem
      title={I18n.t('Me.info.school')}
    >
      <ItemText>{user.university.name_en}</ItemText>
    </StyledInputItem>
    <StyledInputItem
      title={I18n.t('Me.info.department')}
    >
      <ItemText>{user.department}</ItemText>
    </StyledInputItem>
    <StyledInputItem
      title={I18n.t('Me.info.grade')}
    >
      <ItemText>{user.year}</ItemText>
    </StyledInputItem>
  </MainScrollView>
)

