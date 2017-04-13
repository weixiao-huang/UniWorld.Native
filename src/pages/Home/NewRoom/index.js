/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, Picker } from 'react-native'
import styles from '../../../common/styles'

import NewRoomButton from '../../../components/StyleButton'

import InputArea from './InputArea'

const inputHeight = 45
const iconSize = 18

export default class NewRoom extends Component {
  static navigationOptions = {
    tabBar: {
      label: '新房间',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../../assets/icon/newR.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  create () {

  }

  render() {
    return (
      <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 100}]}>
        <Image style={roomStyle.cover} source={require('../../../assets/customCreate.png')}/>
        <Text style={roomStyle.title}>创建新房间</Text>
        <Text style={roomStyle.subTitle}>无论是烧烤之夜还是雪球大战</Text>
        <Text style={roomStyle.subTitle}>用UniWorld定义一个属于你的世界</Text>
        <InputArea/>
        <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight: 20}]}>
           <NewRoomButton
            title="创建房间"
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
