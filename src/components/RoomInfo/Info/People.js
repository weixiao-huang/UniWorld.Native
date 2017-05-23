/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import Avatar from '../../Avatar'
const containerGap = 15
const gap = 7
const numPerRow = 5

export default class People extends Component {
  static propTypes = {
    // max_participants: PropTypes.number.isRequired,
    participants: PropTypes.array.isRequired
  }

  render() {
    const { max_participants, participants } = this.props
    return (
      <View style={[localStyles.people]}>
        <View style={[styles.fullFlexWidth, localStyles.people__title]}>
          <Text style={[localStyles.people__title__text]}>
            {participants.length} {I18n.t('Room.Info.Participants.space1')} {max_participants ? `, ${max_participants - participants.length} ${I18n.t('Room.Info.Participants.space2')}` : ''}
          </Text>
          <Text style={[localStyles.people__title__text]}>
            { max_participants ? `${participants.length} / ${max_participants}` : I18n.t('NewRoom.input.second.max.placeholder') }
          </Text>
        </View>
        <View style={[styles.rowFlex, styles.flexWrap, {alignItems: 'flex-start'}]}>
          {participants.map((item, index) => (
            <View key={index} style={[localStyles.people__icon]}>
              <Avatar
                id={item.id}
                size={(Dimensions.get('window').width - 2 * containerGap) / numPerRow - gap * 2}
                avatar={item.avatar}
              />
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  people__title: {
    justifyContent: 'space-between',
    marginBottom: 5
  },
  people__title__text: {
    color: '#ff5757',
    fontSize: 16
  },
  people__icon: {
    margin: gap
  },
  people__icon__item: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ec5367',
  },
  people: {
    margin: 20
  },
})
