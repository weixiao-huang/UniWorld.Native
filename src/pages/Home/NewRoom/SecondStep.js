/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Picker, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import DatePicker from 'react-native-datepicker'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'

import styles from '../../../common/styles'

import NewRoomButton from '../../../components/StyleButton'
import InputArea from './InputItem'
import InputItem from './InputItem'
import DateTimePicker from './DateTimePicker'

const mapStateToProps = state => ({
  newRoom: state.newRoom
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class SecondStep extends Component {
  constructor(props) {
    super(props)
    const date = new Date()
    const dateFormat = '' // `${date.getYear() + 1900}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`
    this.state = {
      date_time_start: dateFormat,
      date_time_end: dateFormat,
      max_participants: I18n.t('NewRoom.input.second.max.placeholder')
    }
  }
  next() {

  }
  render() {
    return (
      <ScrollView>
        <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 100}]}>
          <Image style={localStyles.cover} source={require('../../../assets/customCreate.png')}/>
          <Text style={localStyles.title}>{I18n.t('NewRoom.title')}</Text>
          <Text style={localStyles.subTitle}>{I18n.t('NewRoom.subTitle1')}</Text>
          <Text style={localStyles.subTitle}>{I18n.t('NewRoom.subTitle2')}</Text>
          <View>
            <InputItem title={I18n.t('NewRoom.input.name.title')}>
              <Text style={[styles.flex1]}>{this.props.newRoom.title}</Text>
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.label.title')}>
              <Text style={[styles.flex1]}>{this.props.newRoom.labels.join(', ')}</Text>
            </InputItem>
          </View>
          <View>
            <InputItem title={I18n.t('NewRoom.input.second.intro.title')}>
              <TextInput
                style={[styles.flex1, styles.contentFontSize]}
                placeholder={I18n.t('NewRoom.input.second.intro.placeholder')}
                multiline={true}
              />
            </InputItem>
            <DateTimePicker title={I18n.t('NewRoom.input.second.start.title')} date={this.state.date_time_start} onDateChange={date_time_start => this.setState({date_time_start})}/>
            <DateTimePicker title={I18n.t('NewRoom.input.second.end.title')} date={this.state.date_time_end} onDateChange={date_time_end => this.setState({date_time_end})}/>
            <InputItem title={I18n.t('NewRoom.input.second.max.title')}>
              <View style={[styles.flex1]}>

              </View>
            </InputItem>
          </View>
          <InputArea/>
          <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight: 20}]}>
            <NewRoomButton
              title={I18n.t('NewRoom.button')}
              onPress={this.next}
              inlineStyle={localStyles.button}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  text: {

  },
  cover: {
    width: '90%',
    height: 130
  },
  subTitle: {
    color: '#95a8e2',
    fontSize: 14,
    padding: 3,
  },
  title: {
    color: '#3e3974',
    fontSize: 28,
    padding: 16,
  },
  button: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#ec5367',
    borderRadius: 5
  }
})
