/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Picker from 'react-native-picker'

import I18n from 'react-native-i18n'
import _ from 'lodash'
import styles from '../../../common/styles'

import InputItem from './InputItem'

import { GetInitialLabels } from '../../../store/actions'

const mapStateToProps = state => ({
  initialLabels: state.initial.labels
})

function replaceKeysDeep(obj, replaceKey) {
  const replacedKey = 'children'
  const newKey = obj[replaceKey]
  if (_.isArray(obj)) {
    return _.transform(obj, (result, value, key) => {
      result[key] = _.isObject(value) ? replaceKeysDeep(value, replaceKey) : value
    })
  } else {
    if (Object.keys(obj[replacedKey]).length > 0) {
      return _.transform(obj, (result, value, key) => { // transform to a new object
        const currentKey = key === replacedKey ? newKey : key
        if (key === replacedKey || !isNaN(parseInt(key))) {
          result[currentKey] = _.isObject(value) ? replaceKeysDeep(value, replaceKey) : value
        }
      })
    } else return obj[replaceKey]
  }
}

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class InputArea extends Component {
  componentWillMount() {
    this.props.dispatch(GetInitialLabels)
  }

  constructor(props) {
    super(props)
    this.state = {
      labels: [],
      match: false
    }
  }

  _createInitialLabels(name) {
    return Object.values(replaceKeysDeep(this.props.initialLabels, name))[0]
  }

  _showLabelPicker() {
    Picker.init({
      pickerData: this._createInitialLabels('name_ch'),
      // selectedValue: ['河北', '唐山', '古冶区'],
      onPickerConfirm: pickedValue => {
        console.log('area', pickedValue)
        this.setState({
          labels: this.state.labels.concat(pickedValue)
        })
      },
      onPickerCancel: pickedValue => {
        console.log('area', pickedValue)
      },
      onPickerSelect: pickedValue => {
        console.log('area', pickedValue)
      }
    })
    Picker.show()
  }

  render () {
    return (
      <View style={{marginTop: 30, marginBottom: 20}}>
        <InputItem title={I18n.t('NewRoom.input.name.title')}>
          <TextInput style={[styles.flex1, styles.contentFontSize]} placeholder={I18n.t('NewRoom.input.name.placeholder')}/>
        </InputItem>
        <InputItem title={I18n.t('NewRoom.input.label.title')}>
          <Text>{this.state.labels}</Text>
          <TouchableOpacity style={[styles.flex1]} onPress={this._showLabelPicker.bind(this)}>
            <Text style={[styles.contentFontSize, localStyles.label]}>
              {I18n.t('NewRoom.input.label.placeholder')}
            </Text>
          </TouchableOpacity>
        </InputItem>
        <InputItem title={I18n.t('NewRoom.input.match.title')}>
          <Text style={[styles.flex1, styles.gray, styles.contentFontSize]}>{I18n.t('NewRoom.input.match.placeholder')}</Text>
          <Switch
            style={{marginRight: 10}}
            onValueChange={match => this.setState({match})}
            value={this.state.match}
          />
        </InputItem>
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  label: {
    color: '#c7c7cd'
  }
})
