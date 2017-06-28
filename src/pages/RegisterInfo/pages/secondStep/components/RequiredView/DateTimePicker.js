import React, { PropTypes } from 'react'
import styled from 'styled-components/native'
import DatePicker from 'react-native-datepicker'
import I18n from '@/locales'

import InputItem from '@/components/InputItem'

const MainView = styled.View`
  flex: 1;
  flex-direction: row;
`

const StyledDatePicker = styled(DatePicker)`
  width: 200px;
`

const DateTimePicker = ({ title, date, onDateChange }) => (
  <InputItem
    title={title}
    titleWidth="44px"
  >
    <MainView>
      <StyledDatePicker
        date={date}
        mode="datetime"
        placeholder={I18n.t('NewRoom.input.second.timePlaceholder')}
        format="YYYY-MM-DD hh:mm a"
        minDate="2016-05-01"
        maxDate="2018-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateIcon: {
            // position: 'absolute',
            // right: 0,
            // top: 4,
            // marginLeft: 0
          },
          dateInput: {
            borderWidth: 0,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={onDateChange}
      />
    </MainView>
  </InputItem>
)

DateTimePicker.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
}

export default DateTimePicker
