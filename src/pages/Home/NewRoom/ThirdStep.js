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

import { SetPrivate } from '../../../store/actions'

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

  render() {
    const max = this.props.newRoom.max_participants
    return (
      <ScrollView style={[localStyles.container]}>
        <View>
          <RoomItem src="" title={this.props.newRoom.title} place={this.props.newRoom.location_string} timeRange={[this.props.newRoom.date_time_start, this.props.newRoom.date_time_end]} max_participants={isNaN(max) ? null : max}/>
        </View>
        <View>

        </View>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    marginTop: 80
  },
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
