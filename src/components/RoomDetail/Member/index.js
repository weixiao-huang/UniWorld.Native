/**
 * Created by huangwx on 18/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'
import styles from '../../../common/styles'
import Button from '../../../components/StyleButton'

import AvatarBox from './AvatarBox'

const mapStateToProps = state => ({

})

@connect(mapStateToProps)
export default class Member extends Component {
  @autobind
  reportRoom() {

  }
  @autobind
  reportUser() {

  }
  @autobind
  likeRoom() {

  }
  @autobind
  likeUser() {

  }

  render() {
    return (
      <View style={[styles.flex1]}>
        <ScrollView style={[{marginBottom: 50}]}>
          <AvatarBox/>
          <View style={[styles.rowFlex, localStyles.button]}>
            <Button color='#999' inlineStyle={[styles.flex1, localStyles.button__item]} title={I18n.t('Room.Detail.Member.reportRoom')} onPress={this.reportRoom}/>
            <Button color='#999' inlineStyle={[styles.flex1, localStyles.button__item]} title={I18n.t('Room.Detail.Member.reportUser')} onPress={this.reportUser}/>
          </View>
        </ScrollView>
        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
          <Button inlineStyle={[localStyles.footer__button, {backgroundColor: '#fdae57', flex: 1}]} title={I18n.t('Room.Member.Footer.likeRoom')} onPress={this.likeRoom}/>
          <Button inlineStyle={[localStyles.footer__button, {backgroundColor: '#ec5367', flex: 2}]} title={I18n.t('Room.Member.Footer.likeAll')} onPress={this.likeUser}/>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  button: {
    margin: 10
  },
  button__item: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footer__text: {
    padding: 16,
    color: 'white',
    fontSize: 17
  },
  footer__button: {
    borderRadius: 0,
    padding: 20
  }
})
