/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import styles from '../../../common/styles'

import InputItem from './InputItem'

export default class DateTimePicker extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <InputItem title={this.props.title}>
        <View style={[styles.flex1]}>
          <DatePicker
            style={{width: 200}}
            date={this.props.date}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD hh:mm a"
            minDate="2016-05-01"
            maxDate="2018-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
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
