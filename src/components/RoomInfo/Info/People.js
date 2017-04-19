/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'
import styles from '../../../common/styles'

import { GoToUser, FetchUser } from '../../../store/actions'

@connect(...[, dispatch => ({dispatch})])
export default class People extends Component {
  static propTypes = {
    // max_participants: PropTypes.number.isRequired,
    participants: PropTypes.array.isRequired
  }

  @autobind
  _gotoUser(id) {
    return async () => {
      await this.props.dispatch(FetchUser(id))
      await this.props.dispatch(GoToUser(id))
    }
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
        <View style={[styles.fullFlexWidth, localStyles.people__iconBox]}>
          {participants.map((item, index) => {
            return (
              <TouchableOpacity onPress={this._gotoUser(item.id)} style={[localStyles.people__icon]} key={index}>
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
  people__iconBox: {
    flexWrap: 'wrap'
  },
  people__title: {
    justifyContent: 'space-between',
    marginBottom: 5
  },
  people__title__text: {
    color: '#ff5757',
    fontSize: 16
  },
  people__icon: {
    margin: 4
  },
  people__icon__item: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ec5367',
  },
  people: {
    margin: 12
  },
})
