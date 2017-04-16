/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import DatePicker from 'react-native-datepicker'
import Picker from 'react-native-picker'
// import InputBox from './InputBox'

import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'

import { SetNewRoomData } from '../../../store/actions'

import styles from '../../../common/styles'

import NewRoomButton from '../../../components/StyleButton'
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
      max_participants: ''
    }
  }

  @autobind
  _showPicker() {
    const threshold = 30
    Picker.init({
      pickerData: ['NL'].concat(Object.keys(Array.from(new Array(threshold+1))).slice(2)),
      pickerTitleText: I18n.t('NewRoom.input.second.max.pickerTitle'),
      onPickerConfirm: max_participants => {
        this.props.dispatch(SetNewRoomData('max_participants', parseInt(max_participants[0])))
      }
    })
    Picker.show()
  }

  next() {
    return Actions.third
  }
  render() {
    return (
      <ScrollView>
        <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 100}]}>
          <View>
            <Image style={localStyles.cover} source={require('../../../assets/customCreate2.png')}/>
          </View>
          <Text style={localStyles.title}>{I18n.t('NewRoom.input.second.cover')}</Text>
          <View style={[localStyles.wrap]}>
            <InputItem title={I18n.t('NewRoom.input.name.title')}>
              <Text style={[styles.flex1]}>{this.props.newRoom.title}</Text>
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.label.title')}>
              <Text style={[styles.flex1]}>{this.props.newRoom.labels.join(', ')}</Text>
            </InputItem>
          </View>

          <View style={[localStyles.wrap]}>
            <View style={[localStyles.wrap__title]}>
              <Image style={[localStyles.wrap__icon]} source={require('../../../assets/icon/logoBlue.png')}/>
              <Text style={[{color: '#3555b6'}, localStyles.wrap__title__text]}>Required</Text>
            </View>
            <InputItem title={I18n.t('NewRoom.input.second.intro.title')}>
              <TextInput
                style={[styles.flex1, styles.contentFontSize]}
                placeholder={I18n.t('NewRoom.input.second.intro.placeholder')}
                multiline={true}
                onChangeText={intro => this.props.dispatch(SetNewRoomData('intro', intro))}
              />
            </InputItem>
            <DateTimePicker
              title={I18n.t('NewRoom.input.second.start.title')}
              date={this.props.newRoom.date_time_start}
              onDateChange={date_time_start => this.props.dispatch(SetNewRoomData('date_time_start', date_time_start))}/>
            <DateTimePicker
              title={I18n.t('NewRoom.input.second.end.title')}
              date={this.props.newRoom.date_time_end}
              onDateChange={date_time_end => this.props.dispatch(SetNewRoomData('date_time_end', date_time_end))}/>
            <InputItem title={I18n.t('NewRoom.input.second.location.title')}>
              <TextInput
                style={[styles.flex1]}
                placeholder={I18n.t('NewRoom.input.second.location.placeholder')}
                onchangetext={location_string => this.props.dispatch(SetNewRoomData('location_string', location_string))}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.max.title')}>
              <TouchableOpacity style={[styles.flex1]} onPress={this._showPicker}>
                <Text style={[styles.contentFontSize, this.props.newRoom.max_participants ? {color: 'black'} : {color: '#c9c9c9'}]}>
                  {this.props.newRoom.max_participants ? this.props.newRoom.max_participants : I18n.t('NewRoom.input.second.max.placeholder')}
                </Text>
              </TouchableOpacity>
            </InputItem>
          </View>

          <View style={[localStyles.wrap]}>
            <View style={[localStyles.wrap__title]}>
              <Image style={[localStyles.wrap__icon]} source={require('../../../assets/icon/logoRed.png')}/>
              <Text style={[{color: '#ec5367'}, localStyles.wrap__title__text]}>{I18n.t('NewRoom.input.second.options')}</Text>
            </View>
            <InputItem title={I18n.t('NewRoom.input.second.private.title')}>
              <Text style={[styles.flex1, styles.gray, styles.contentFontSize]}>
                {I18n.t('NewRoom.input.second.private.placeholder')}
              </Text>
              <Switch
                style={{marginRight: 10}}
                onValueChange={isPrivate => this.props.dispatch(SetNewRoomData('isPrivate', isPrivate))}
                value={this.props.newRoom.isPrivate}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.welcome.title')}>
              <TextInput
                style={[styles.flex1]}
                placeholder={I18n.t('NewRoom.input.second.welcome.placeholder')}
                onchangetext={welcome => this.props.dispatch('welcome', welcome)}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.expense.title')}>
              <TextInput
                style={[styles.flex1]}
                placeholder={I18n.t('NewRoom.input.second.expense.placeholder')}
                onchangetext={expense => this.props.dispatch('expense', expense)}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.rewards.title')}>
              <TextInput
                style={[styles.flex1]}
                placeholder={I18n.t('NewRoom.input.second.rewards.placeholder')}
                onchangetext={rewards => this.props.dispatch('rewards', rewards)}
              />
            </InputItem>
          </View>

          <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight: 20}]}>
            <NewRoomButton
              title={I18n.t('NewRoom.button')}
              onPress={this.next()}
              inlineStyle={localStyles.button}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  wrap: {
    marginTop: 10,
    marginBottom: 14
  },
  cover: {
    height: 150,
    resizeMode: 'contain'
  },
  wrap__icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  wrap__title: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingBottom: 10
  },
  wrap__title__text: {
    fontSize: 18,
    paddingLeft: 10
  },
  title: {
    color: '#95a8e2',
    fontSize: 18,
    padding: 18,
  },
  max: {
    color: '#c9c9c9'
  },
  button: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#ec5367',
    borderRadius: 5
  }
})
