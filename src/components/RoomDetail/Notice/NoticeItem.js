/**
 * Created by huangwx on 19/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import styles from '../../../common/styles'

export default class NoticeItem extends Component {
  static propTypes = {
    questionnaire: PropTypes.object.isRequired
  }
  render() {
    const time = new Date(this.props.questionnaire.time)
    const { title, description } = this.props.questionnaire
    console.log('问卷：', this.props.questionnaire)
    console.log('问卷细节：', title, description)
    return (
      <View style={[styles.rowFlex, localStyles.container]}>
        <View style={[styles.flexCenter, localStyles.time]}>
          <Text style={[{fontSize: 20}]}>{time.getMonth()+1}月</Text>
          <Text style={[{fontSize: 14}]}>{time.getDay()}日</Text>
          <Text style={[{fontSize: 10, color: '#9a9a9a'}]}>{time.toTimeString().split(':').splice(0, 2).join(':')}</Text>
        </View>
        <View style={[styles.whiteBackground, styles.flex1, localStyles.wrap]}>
          <View style={[styles.rowFlex, localStyles.wrap__title]}>
            <Image style={[localStyles.wrap__title__icon]} source={require('../../../assets/icon/info.png')}/>
            <Text style={[localStyles.wrap__title__text]}> {title}</Text>
          </View>
          <View style={[localStyles.wrap__content]}>
            <Text>{description}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    marginRight: 20,
    alignItems: 'flex-start'
  },
  time: {
    paddingLeft: 10,
    paddingRight: 10
  },
  wrap: {
    borderRadius: 10
    // paddingTop: 10,
    // paddingBottom: 10
  },
  wrap__title: {
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 5,
    paddingBottom: 10,
    margin: 10
  },
  wrap__title__icon: {
    width: 20,
    height: 20
  },
  wrap__title__text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  wrap__content: {
    padding: 10,
    paddingTop: 2,
    margin: 5,
    marginTop: 0
  },
  wrap__content__text: {

  }
})
