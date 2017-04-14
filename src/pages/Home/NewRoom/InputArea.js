/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text, TextInput, Switch, Picker } from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import InputItem from './InputItem'

export default class InputArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: 'Java',
      match: false
    }
  }

  render () {
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
