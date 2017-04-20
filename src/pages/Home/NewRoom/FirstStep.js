/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'

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
      title: this.props.title
    }
  }

  @autobind
  next() {
    this.props.navigation.navigate('Second')
    this.props.dispatch(SetNewRoomData('title', this.state.title))
  }

  render() {
    return (
      <ScrollView>
        <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 20}]}>
          <Image style={localStyles.cover} source={require('../../../assets/customCreate.png')}/>
          <Text style={localStyles.title}>{I18n.t('NewRoom.title')}</Text>
          <Text style={localStyles.subTitle}>{I18n.t('NewRoom.subTitle1')}</Text>
          <Text style={localStyles.subTitle}>{I18n.t('NewRoom.subTitle2')}</Text>
          <InputArea
            onChangeTitle={title => this.setState({title})}
          />
          <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight: 20}]}>
            <NewRoomButton
              title={I18n.t('NewRoom.button')}
              onPress={this.next}
              inlineStyle={localStyles.button}
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
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: '#ec5367',
    borderRadius: 5,
    padding: 15
  }
})
