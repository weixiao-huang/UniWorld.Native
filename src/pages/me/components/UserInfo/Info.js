import React from 'react'
import { StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'

import {
  MainView,
  StyledInputItem,
  ItemText,
  EmptyView,
} from './style'

const styles = StyleSheet.create({
  text: {
    lineHeight: 32,
    fontWeight: '400',
  },
})

const Info = ({ user }) => {
  console.log(user)
  return (
    <MainView>
      <StyledInputItem
        title={I18n.t('Me.info.phone')}
        textStyle={styles.text}
      >
        <ItemText>{user.username}</ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.name')}
        textStyle={styles.text}
      >
        <ItemText></ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.gender')}
        textStyle={styles.text}
      >
        <ItemText>
          {user.gender === true ?
            I18n.t('Gender.male') :
            (user.gender === false ? I18n.t('Gender.female') : 'Secret')
          }
        </ItemText>
      </StyledInputItem>
      <EmptyView />
      <StyledInputItem
        title={I18n.t('Me.info.school')}
        textStyle={styles.text}
      >
        <ItemText>{user.university.name_en}</ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.department')}
        textStyle={styles.text}
      >
        <ItemText>{user.department}</ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.grade')}
        textStyle={styles.text}
      >
        <ItemText>{user.year}</ItemText>
      </StyledInputItem>
      <EmptyView />
      <StyledInputItem
        title={I18n.t('Me.info.nickname')}
        textStyle={styles.text}
      >
        <ItemText>{user.name}</ItemText>
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.signature')}
        textStyle={styles.text}
      >
        <ItemText>{user.signature}</ItemText>
      </StyledInputItem>
    </MainView>
  )
}

export default Info
