/**
 * Created by huangwx on 18/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'

import { connect } from 'react-redux'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'

import styles from '../../../common/styles'

export default class Chat extends Component {
  render() {
    return (
      <View style={[styles.flex1]}>
        <View>
          <Text>Chat</Text>
        </View>
        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
          <Image style={[localStyles.footer__icon]} source={require('../../../assets/icon/logoBlue.png')}/>
          <TextInput multiline={true} style={[styles.fullFlexWidth, localStyles.footer__input]}/>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f5f5f7',
    padding: 10,
    height: 52
  },
  footer__icon: {
    width: 30,
    marginLeft: 5,
    resizeMode: 'contain'
  },
  footer__input: {
    backgroundColor: 'white',
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#bababa',
    borderRadius: 5,
    padding: 10
  }
})
