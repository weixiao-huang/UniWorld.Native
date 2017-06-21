/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Dimensions, KeyboardAvoidingView, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import NewRoomButton from '../../../components/StyleButton'
import InputArea from './InputArea'
import { SetNewRoomData } from '../../../store/actions'

@connect(state => ({title: state.newRoom.title}), dispatch => ({dispatch}))
export default class FirstStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      disabled: false
    }
  }

  next = () => {
    this.setState({disabled: true})
    this.props.navigation.navigate('Second')
    this.props.dispatch(SetNewRoomData({title: this.state.title}))
    setTimeout(() => this.setState({disabled: false}), 1000)
  }

  _isCompleted = () => this.state.title.length > 5

  render() {
    return (
      <ScrollView>
        <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 20}, {paddingBottom:16}]}>
          <Image style={localStyles.cover} source={require('../../../assets/customCreate.png')}/>
          <Text style={localStyles.title}>{I18n.t('NewRoom.title')}</Text>
          <Text style={localStyles.subTitle}>{I18n.t('NewRoom.subTitle1')}</Text>
          <Text style={localStyles.subTitle}>{I18n.t('NewRoom.subTitle2')}</Text>
          <InputArea
            onChangeTitle={title => this.setState({title})}
          />
          <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight: 20,marginTop:16}]}>
            <NewRoomButton
              disabled={!this._isCompleted() || this.state.disabled}
              title={I18n.t('NewRoom.button')}
              onPress={this.next}
              inlineStyle={[localStyles.button, this._isCompleted() ? localStyles.active : localStyles.disabled]}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  cover: {
    resizeMode: 'contain',
    marginTop:20,
    height: 130
  },
  subTitle: {
    color: '#95a8e2',
    fontSize: 14,
    padding: 5,
  },
  title: {
    color: '#3e3974',
    fontSize: 28,
    padding: 16,
  },
  button: {
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    padding: 15
  },
  active: {
    backgroundColor: '#ec5367',
  },
  disabled: {
    backgroundColor: '#cbcbcb'
  }
})
