import React from 'react'
import I18n from '@/locales'
import Picker from 'react-native-picker'

import {
  MainView,
  MainText,
  StyledInput,
  YearTouch,
  YearText,
  InputView,
  GenderText,
} from './style'

const RequiredView = ({
  setData, nickname, gender, department, year, signature,
}) => {
  const showPicker = () => {
    Picker.init({
      pickerData: [2012, 2013, 2014, 2015, 2016, 2017],
      pickerFontSize: 14,
      pickerTitleText: I18n.t('SignInfo.second.grade'),
      onPickerConfirm: (year) => {
        console.log(year)
        setData('year', year[0])
      },
    })
    Picker.show()
  }

  const showPickerGender = () => {
    Picker.init({
      pickerData: [`${I18n.t('SignInfo.second.male')}`, `${I18n.t('SignInfo.second.female')}`, `${I18n.t('SignInfo.second.lgbt')}`],
      pickerFontSize: 14,
      pickerTitleText: I18n.t('SignInfo.second.grade'),
      onPickerConfirm: (gender) => {
        let choice = null
        if (gender[0] === `${I18n.t('SignInfo.second.male')}`) {
          choice = 1
        } else if (gender[0] === `${I18n.t('SignInfo.second.female')}`) {
          choice = 0
        }
        setData('gender', choice)
      },
    })
    Picker.show()
  }


  return (
    <MainView>
      <MainText>{I18n.t('SignInfo.second.nickname')}</MainText>
      <InputView>
        <StyledInput
          defaultValue={nickname}
          onChangeText={e => setData('nickname', e)}
        />
      </InputView>
      <MainText>{I18n.t('SignInfo.second.gender')}</MainText>
      <InputView>
        <YearTouch onPress={showPickerGender}>
          <GenderText year={gender}>
            {gender === 1 ? `${I18n.t('SignInfo.second.male')}` :
              gender === 0 ? `${I18n.t('SignInfo.second.female')}` :
                gender === '' ? '' : `${I18n.t('SignInfo.second.lgbt')}`}
          </GenderText>
        </YearTouch>
      </InputView>
      <MainText>{I18n.t('SignInfo.second.department')}</MainText>
      <InputView>
        <StyledInput
          defaultValue={department}
          onChangeText={e => setData('department', e)}
        />
      </InputView>
      <MainText>{I18n.t('SignInfo.second.grade')}</MainText>
      <InputView>
        <YearTouch onPress={showPicker}>
          <YearText year={year}>
            {year || 2017}
          </YearText>
        </YearTouch>
      </InputView>

      <MainText>{I18n.t('SignInfo.second.signature')}</MainText>
      <InputView>
        <StyledInput
          defaultValue={signature}
          onChangeText={e => setData('signature', e)}
        />
      </InputView>
    </MainView>
  )
}

export default RequiredView
