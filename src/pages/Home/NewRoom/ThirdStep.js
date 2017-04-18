/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import DatePicker from 'react-native-datepicker'
import Picker from 'react-native-picker'

import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'

import styles from '../../../common/styles'

import NewRoomButton from '../../../components/StyleButton'
import RoomItem from '../../../components/RoomItem'
import InputItem from '../../../components/InputItem'
import DateTimePicker from './DateTimePicker'

const mapStateToProps = state => ({
  newRoom: state.newRoom
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class ThirdStep extends Component {
  constructor(props) {
    super(props)
  }
  _confirm() {
    return () => {}
  }

  render() {
    const { newRoom } = this.props
    const max = newRoom.max_participants
    const confirms = [
      {
        title: I18n.t('NewRoom.input.second.name'),
        content: newRoom.title
      },
      {
        title: I18n.t('NewRoom.input.label.title'),
        content: newRoom.labels.join(', ')
      },
      {
        title: I18n.t('NewRoom.input.second.intro.title'),
        content: newRoom.intro
      },
      {
        title: I18n.t('NewRoom.input.second.start.title'),
        content: newRoom.date_time_start
      },
      {
        title: I18n.t('NewRoom.input.second.end.title'),
        content: newRoom.date_time_end
      },
      {
        title: I18n.t('NewRoom.input.second.location.title'),
        content: newRoom.location_string
      },
      {
        title: I18n.t('NewRoom.input.second.max.title'),
        content: isNaN(max) ? 'NL' : max
      },
      {
        title: I18n.t('NewRoom.input.second.private.title'),
        content: newRoom.isPrivate ? I18n.t('yes') : I18n.t('no')
      },
      {
        title: I18n.t('NewRoom.input.second.welcome.title'),
        content: newRoom.welcome
      },
      {
        title: I18n.t('NewRoom.input.second.expense.title'),
        content: newRoom.expense
      },
      {
        title: I18n.t('NewRoom.input.second.rewards.title'),
        content: newRoom.rewards
      }
    ]
    return (
      <ScrollView style={[localStyles.container]}>
        <View style={[localStyles.wrap]}>
          <View style={[localStyles.wrap__title]}>
            <Image style={[localStyles.wrap__icon]} source={require('../../../assets/icon/logoBlue.png')}/>
            <Text style={[{color: '#3555b6'}, localStyles.wrap__title__text]}>{I18n.t('NewRoom.input.third.preview')}</Text>
          </View>
          <View style={[localStyles.wrap__content]}>
            <RoomItem src={this.props.newRoom.cover ? this.props.newRoom.cover : 'https://api.univord.com/static/image/default_avatar.jpg'} title={this.props.newRoom.title} place={this.props.newRoom.location_string} timeRange={[this.props.newRoom.date_time_start, this.props.newRoom.date_time_end]} max_participants={isNaN(max) ? null : max}/>
          </View>
        </View>
        <View style={[localStyles.wrap]}>
          <View style={[localStyles.wrap__title]}>
            <Image style={[localStyles.wrap__icon]} source={require('../../../assets/icon/logoRed.png')}/>
            <Text style={[{color: '#ec5367'}, localStyles.wrap__title__text]}>{I18n.t('NewRoom.input.third.confirm')}</Text>
          </View>
          <View style={[localStyles.wrap__content]}>
            {confirms.map((item, index) => {
              return (
                item.content
                ? <InputItem key={index} title={item.title}>
                    <View style={[styles.fullFlexWidth]}>
                      <Text>{item.content}</Text>
                    </View>
                  </InputItem>
                : null
              )
            })}
          </View>

          <View style={[styles.fullFlexWidth, {margin: 20, marginBottom: 60}]}>
            <NewRoomButton
              title={I18n.t('NewRoom.button')}
              onPress={this._confirm()}
              inlineStyle={localStyles.button}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: '#f2f0f4',
  },
  wrap: {
    marginTop: 10,
    marginBottom: 14
  },
  wrap__content: {
    backgroundColor: 'white'
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
