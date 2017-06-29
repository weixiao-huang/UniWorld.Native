import React from 'react'
import I18n from '@/locales'
import Picker from 'react-native-picker'
import InputItem from '@/components/InputItem'
import titleIcon from '@/img/icon/logoBlue.png'
import DateTimePicker from './DateTimePicker'

import {
  MainView,
  RequiredTitleView,
  RequiredTitleImage,
  RequiredTitleText,
  StyledIntroInput,
  StyledLocationInput,
  MaxTouch,
  MaxText,
} from './style'

const RequiredView = ({
  setData, des, dateTimeStart, dateTimeEnd,
  locationString, maxParticipants,
}) => {
  const showPicker = () => {
    const threshold = 30
    Picker.init({
      pickerData: (Object.keys(Array.from(new Array(threshold + 1))).slice(2)),
      pickerTitleText: I18n.t('NewRoom.input.second.max.pickerTitle'),
      onPickerConfirm: (max) => {
        setData('max_participants', parseInt(max[0], 10))
      },
    })
    Picker.show()
  }

  console.log(des)
  return (
    <MainView>
      <RequiredTitleView>
        <RequiredTitleImage source={titleIcon} />
        <RequiredTitleText>
          Required
        </RequiredTitleText>
      </RequiredTitleView>
      <InputItem
        title={I18n.t('NewRoom.input.second.intro.title')}
        titleWidth="75px"
      >
        <StyledIntroInput
          placeholder={I18n.t('NewRoom.input.second.intro.placeholder')}
          multiline
          defaultValue={des}
          placeholderTextColor={'#bbbbbb'}
          onChangeText={e => setData('description', e)}
        />
      </InputItem>
      <DateTimePicker
        title={I18n.t('NewRoom.input.second.start.title')}
        date={dateTimeStart}
        onDateChange={e => setData('date_time_start', e)}
      />
      <DateTimePicker
        title={I18n.t('NewRoom.input.second.end.title')}
        date={dateTimeEnd}
        onDateChange={e => setData('date_time_end', e)}
      />
      <InputItem
        title={I18n.t('NewRoom.input.second.location.title')}
        titleWidth="75px"
      >
        <StyledLocationInput
          placeholder={I18n.t('NewRoom.input.second.location.placeholder')}
          maxLength={30}
          defaultValue={locationString}
          onChangeText={e => setData('location_string', e)}
        />
      </InputItem>
      <InputItem
        title={I18n.t('NewRoom.input.second.max.title')}
        titleWidth="75px"
      >
        <MaxTouch onPress={showPicker}>
          <MaxText max={maxParticipants}>
            {maxParticipants || 2}
          </MaxText>
        </MaxTouch>
      </InputItem>
    </MainView>
  )
}

export default RequiredView
