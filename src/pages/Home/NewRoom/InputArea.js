/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text, TextInput, Switch } from 'react-native'
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
  return _.transform(obj, (result, value, key) => { // transform to a new object
    const currentKey = key === replacedKey ? newKey : key
    if (key === replacedKey || !isNaN(parseInt(key))) {
      result[currentKey] = _.isObject(value) ? replaceKeysDeep(value, replaceKey) : value
    }
  })
}

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class InputArea extends Component {
  componentWillMount() {
    this.props.dispatch(GetInitialLabels)
  }


  constructor(props) {
    super(props)
    this.state = {
      label: 'Java',
      match: false
    }
  }

  _createInitialLabels(name) {
    return replaceKeysDeep(this.props.initialLabels, name)
  }

  render () {
    console.log(this._createInitialLabels('name_ch'))
    console.log('标签', this.props.initialLabels)
    return (
      <View style={{marginTop: 30, marginBottom: 20}}>
        <InputItem title={I18n.t('NewRoom.input.name.title')}>
          <TextInput style={[styles.flex1, styles.contentSize]} placeholder={I18n.t('NewRoom.input.name.placeholder')}/>
        </InputItem>
        <InputItem title={I18n.t('NewRoom.input.label.title')}>
          {/*<Picker*/}
            {/*style={[styles.flex1, {borderWidth: 0}]}*/}
            {/*selectedValue={this.state.label}*/}
            {/*onValueChange={label => this.setState({label})}>*/}
            {/*<Picker.Item label="Java" value="java" />*/}
            {/*<Picker.Item label="JavaScript" value="js" />*/}
          {/*</Picker>*/}
          <TextInput style={[styles.flex1, styles.contentSize]} placeholder={I18n.t('NewRoom.input.label.placeholder')}/>
        </InputItem>
        <InputItem title={I18n.t('NewRoom.input.match.title')}>
          <Text style={[styles.flex1, styles.gray, styles.contentSize]}>{I18n.t('NewRoom.input.match.placeholder')}</Text>
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
