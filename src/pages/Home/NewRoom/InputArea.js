/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, Text, TextInput, Switch, Picker } from 'react-native'
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
        <InputItem title="房间名称">
          <TextInput style={[styles.flex1, styles.contentSize]} placeholder="周六去北海划船吧!"/>
        </InputItem>
        <InputItem title="房间标签">
          {/*<Picker*/}
            {/*style={[styles.flex1, {borderWidth: 0}]}*/}
            {/*selectedValue={this.state.label}*/}
            {/*onValueChange={label => this.setState({label})}>*/}
            {/*<Picker.Item label="Java" value="java" />*/}
            {/*<Picker.Item label="JavaScript" value="js" />*/}
          {/*</Picker>*/}
          <TextInput style={[styles.flex1, styles.contentSize]} placeholder="选择房间标签"/>
        </InputItem>
        <InputItem title="大型匹配">
          <Text style={[styles.flex1, styles.gray, styles.contentSize]}>是否设为大型匹配房间</Text>
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
