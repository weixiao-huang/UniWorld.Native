/**
 * Created by huangwx on 11/04/2017.
 */
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from 'react-native'
import I18n from 'react-native-i18n'

import styles from '../../../../common/styles'

export default class Search extends Component {
  search () {

  }
  render () {
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <View style={[styles.flexCenter, localStyles.inputBox]}>
          <TextInput style={[styles.flex1, localStyles.input]} placeholder="Search"/>
          <TouchableOpacity onPress={this.search}>
            <Text style={localStyles.button}>{I18n.t('World.Search.button')}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.flex1, styles.flexCenter]}>
          <Image style={[localStyles.cover]} source={require('../../../../assets/emptyList.png')}/>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  cover: {
    resizeMode: 'contain',
    width: '70%',
  },
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
