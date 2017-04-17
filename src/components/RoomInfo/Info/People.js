/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'


export default class People extends Component {
  static propTypes = {
    max_participants: PropTypes.number.isRequired,
    participants: PropTypes.array.isRequired
  }
  render() {
    const { max_participants, participants } = this.props
    return (
      <View style={[localStyles.people]}>
        <View style={[styles.fullFlexWidth, localStyles.people__title]}>
          <Text style={[localStyles.people__title__text]}>{participants.length} {I18n.t('Room.Info.Participants.space1')}, {max_participants - participants.length} {I18n.t('Room.Info.Participants.space2')}</Text>
          <Text style={[localStyles.people__title__text]}>{participants.length} / {max_participants}</Text>
        </View>
        <View style={[styles.fullFlexWidth]}>
          {participants.map((item, index) => {
            return (
              <TouchableOpacity style={[localStyles.people__icon]} key={index}>
                <Image
                  style={[localStyles.people__icon__item]}
                  source={{uri: item.avatar}}
                />
              </TouchableOpacity>
            )
          })}
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
    margin: 5
  },
  people__icon__item: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ec5367',
  },
  people: {
    margin: 15
  },
})
