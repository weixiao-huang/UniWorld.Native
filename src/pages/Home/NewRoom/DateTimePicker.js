/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import InputItem from '../../../components/InputItem'

export default class DateTimePicker extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <InputItem title={this.props.title}>
        <View style={[styles.fullFlexWidth]}>
          <DatePicker
            style={{width: 200}}
            date={this.props.date}
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
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={this.props.onDateChange}
          />
        </View>
      </InputItem>
    )
  }
}
