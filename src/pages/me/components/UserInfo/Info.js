import React from 'react'
import { StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'
import Picker from 'react-native-picker'

import EmptyView from '@/components/EmptyView'

import {
  MainView,
  PickerTouch,
  PickerText,
  StyledInput,
  StyledInputItem,
  ItemText,
} from './style'

const styles = StyleSheet.create({
  text: {
    lineHeight: 32,
    fontWeight: '400',
  },
})

const Info = ({
  setData, user, isEditing, gender, year,
}) => {
  const gender1 = gender === '' ? user.gender : gender
  const genderText = gender1 === true ?
    I18n.t('Gender.male') :
    gender1 === false ?
      I18n.t('Gender.female') :
      I18n.t('Gender.null')

  const showGenderPicker = () => {
    Picker.init({
      pickerData: [
        I18n.t('Gender.male'),
        I18n.t('Gender.female'),
        I18n.t('Gender.null'),
      ],
      selectedValue: [genderText],
      onPickerConfirm: (value) => {
        const newGender = value[0] === I18n.t('Gender.male') ?
          true :
          value[0] === I18n.t('Gender.female') ?
            false : null
        setData('gender', newGender)
      },
      onPickerCancel: pickedValue => {},
      onPickerSelect: pickedValue => {},
    })
    Picker.show()
  }

  const showYearPicker = () => {
    Picker.init({
      pickerData: [2011, 2012, 2013, 2014, 2015, 2016],
      selectedValue: [year],
      // pickerTitleText: I18n.t('NewRoom.input.label.selectTitle'),
      onPickerConfirm: (e) => {
        setData('year', e[0])
      },
      onPickerCancel: pickedValue => {},
      onPickerSelect: pickedValue => {},
    })
    Picker.show()
  }

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
        {isEditing ? <PickerTouch
          onPress={showGenderPicker}
        >
          <PickerText isPlaced={gender !== ''}>
            {genderText}
          </PickerText>
        </PickerTouch> :
        <ItemText>
          {genderText}
        </ItemText>}
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
        {isEditing ? <StyledInput
          onChangeText={e => setData('department', e)}
          placeholder={user.department}
        /> :
        <ItemText>
          {user.department}
        </ItemText>}
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.grade')}
        textStyle={styles.text}
      >
        {isEditing ? <PickerTouch
          onPress={showYearPicker}
        >
          <PickerText isPlaced={year}>
            {year || user.year}
          </PickerText>
        </PickerTouch> :
        <ItemText>
          {user.year}
        </ItemText>}
      </StyledInputItem>
      <EmptyView />
      <StyledInputItem
        title={I18n.t('Me.info.nickname')}
        textStyle={styles.text}
      >
        {isEditing ? <StyledInput
          placeholder={user.name}
          onChangeText={e => setData('name', e)}
        /> :
        <ItemText>
          {user.name}
        </ItemText>}
      </StyledInputItem>
      <StyledInputItem
        title={I18n.t('Me.info.signature')}
        textStyle={styles.text}
      >
        {isEditing ? <StyledInput
          placeholder={user.signature}
          onChangeText={e => setData('signature', e)}
        /> :
        <ItemText>
          {user.signature}
        </ItemText>}
      </StyledInputItem>
    </MainView>
  )
}

export default Info
