/**
 * Created by huangwx on 11/04/2017.
 */
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'

import styles from '../../../common/styles'

export default class Search extends Component {
  search () {

  }
  render () {
    return (
      <View style={[styles.flex1]}>
        <View style={[styles.flexCenter, searchStyles.inputBox]}>
          <TextInput style={[styles.flex1, searchStyles.input]} placeholder="Search"/>
          <TouchableOpacity onPress={this.search}>
            <Text style={searchStyles.button}>搜索</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const searchStyles = StyleSheet.create({
  inputBox: {
    padding: 5,
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  input: {
    backgroundColor: '#eee',
    paddingLeft: 10
  },
  button: {
    marginLeft: 15,
    marginRight: 15,
    color: '#6485ed'
  }
})
