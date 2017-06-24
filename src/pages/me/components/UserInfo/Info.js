import React from 'react'
import styled from 'styled-components/native'
import InputItem from '@/components/InputItem'
import I18n from 'react-native-i18n'

const MainView = styled.View`
`

const ItemText = styled.Text`
  font-size: 14px;
  fontWeight: normal;
`
const EmptyView = styled.View`
  height: 6px;
`

const StyledInputItem = styled(InputItem) `
  justify-content: flex-start;
  padding-top: 3px;
  padding-bottom: 3px;
`

const Info = ({ user }) => {
  console.log(user)
  return (
    <MainView>
      <StyledInputItem
        title={I18n.t('Me.info.phone')}
        textStyle={{ lineHeight: 32, fontWeight: '400'}}
      >
        <ItemText>{user.username}</ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.name')}
        textStyle={{ lineHeight: 32, fontWeight: '400' }}
      >
        <ItemText></ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.gender')}
        textStyle={{ lineHeight: 32, fontWeight: '400' }}
      >
        <ItemText>
          {user.gender === true ?
            I18n.t('Gender.male') :
            (user.gender === false ? I18n.t('Gender.female') : 'Secret')
          }
        </ItemText>
      </StyledInputItem>

      <EmptyView/>

      <StyledInputItem
        title={I18n.t('Me.info.school')}
        textStyle={{ lineHeight: 32, fontWeight: '400' }}
      >
        <ItemText>{user.university.name_en}</ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.department')}
        textStyle={{ lineHeight: 32, fontWeight: '400' }}
      >
        <ItemText>{user.department}</ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.grade')}
        textStyle={{ lineHeight: 32, fontWeight: '400' }}
      >
        <ItemText>{user.year}</ItemText>
      </StyledInputItem>

      <EmptyView/>

      <StyledInputItem
        title={I18n.t('Me.info.school')}
        textStyle={{ lineHeight: 32, fontWeight: '400' }}
      >
        <ItemText>{user.nickname}</ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.department')}
        textStyle={{ lineHeight: 32, fontWeight: '400' }}
      >
        <ItemText>{user.signature}</ItemText>
      </StyledInputItem>
    </MainView>
  )
}

export default Info
