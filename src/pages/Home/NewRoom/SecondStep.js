/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'

import styles from '../../../common/styles'

import NewRoomButton from '../../../components/StyleButton'
import InputArea from './InputItem'
import InputItem from './InputItem'

const mapStateToProps = state => ({
  newRoom: state.newRoom
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class SecondStep extends Component {
  next() {

  }
  render() {
    return (
      <ScrollView>
        <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 100}]}>
          <Image style={localStyles.cover} source={require('../../../assets/customCreate.png')}/>
          <Text style={localStyles.title}>{I18n.t('NewRoom.title')}</Text>
          <Text style={localStyles.subTitle}>{I18n.t('NewRoom.subTitle1')}</Text>
          <Text style={localStyles.subTitle}>{I18n.t('NewRoom.subTitle2')}</Text>
          <View>
            <InputItem title={I18n.t('NewRoom.input.name.title')}>
              <Text style={[styles.flex1]}>{this.props.newRoom.title}</Text>
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.label.title')}>
              <Text style={[styles.flex1]}>{this.props.newRoom.labels.join(', ')}</Text>
            </InputItem>
          </View>
          <View>
            <InputItem title={I18n.t('NewRoom.input.second.intro.title')}>
              <TextInput
                style={[styles.flex1, styles.contentFontSize]}
                placeholder={I18n.t('NewRoom.input.second.intro.placeholder')}
                multiline={true}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.start.title')}>
              <View style={[styles.flex1, styles.contentFontSize]}>

              </View>
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.end.title')}>
              <View style={[styles.flex1, styles.contentFontSize]}>

              </View>
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.max.title')}>
              
            </InputItem>
          </View>
          <InputArea/>
          <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight: 20}]}>
            <NewRoomButton
              title={I18n.t('NewRoom.button')}
              onPress={this.next()}
              inlineStyle={localStyles.button}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  text: {

  },
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
  button: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#ec5367',
    borderRadius: 5
  }
})
