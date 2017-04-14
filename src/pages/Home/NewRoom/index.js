/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, Picker } from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import NewRoomButton from '../../../components/StyleButton'

import InputArea from './InputArea'

const inputHeight = 45
const iconSize = 18

export default class NewRoom extends Component {
  create () {

  }

  render() {
    return (
      <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 100}]}>
        <Image style={roomStyle.cover} source={require('../../../assets/customCreate.png')}/>
        <Text style={roomStyle.title}>{I18n.t('NewRoom.title')}</Text>
        <Text style={roomStyle.subTitle}>{I18n.t('NewRoom.subTitle1')}</Text>
        <Text style={roomStyle.subTitle}>{I18n.t('NewRoom.subTitle2')}</Text>
        <InputArea/>
        <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight: 20}]}>
           <NewRoomButton
            title={I18n.t('NewRoom.button')}
            onPress={this.create}
            inlineStyle={{margin: 20, backgroundColor: '#ec5367', borderRadius: 5}}
          />
        </View>
      </View>
    )
  }
}

const roomStyle = StyleSheet.create({
  cover: {
    width: '90%',
    height: 130
  },
  subTitle: {
    color: '#95a8e2',
    fontSize: 14,
    padding: 3,
  },
  title: {
    color: '#3e3974',
    fontSize: 28,
    padding: 16,
  },
})
