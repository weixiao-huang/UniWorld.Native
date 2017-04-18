/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'

import Follow from '../../StyleButton'
import styles from '../../../common/styles'

import { GoToUser, GetUser } from '../../../store/actions'

@connect(...[, dispatch => ({dispatch})])
export default class Host extends Component {
  static propsTypes = {
    host: PropTypes.object.isRequired
  }
  follow() {

  }

  @autobind
  _gotoHost(id) {
    return () => {
      this.props.dispatch(GoToUser(id))
      this.props.dispatch(GetUser(id))
    }
  }

  render() {
    const { host } = this.props
    return (
      <View style={[styles.fullFlexWidth, localStyles.container]}>
        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.wrap]}>
          <TouchableOpacity onPress={this._gotoHost(host.id)}>
            <Image style={[localStyles.wrap__avatar]} source={{uri: host.avatar}}/>
          </TouchableOpacity>
          <View style={[styles.flex1, localStyles.wrap__title]}>
            <Text style={[localStyles.wrap__title__name]}>{host.name}</Text>
            <Text style={[localStyles.wrap__title__signature]}>{host.signature}</Text>
          </View>
        </View>
        <View style={[localStyles.buttonBox]}>
          <Follow inlineStyle={localStyles.buttonBox__button} title={I18n.t('Room.follow')} onPress={this.follow}/>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  wrap: {
    padding: 10
  },
  wrap__title__name: {
    fontSize: 20,
    marginBottom: 14
  },
  wrap__title__signature: {
    fontSize: 14,
    color: '#808080'
  },
  wrap__title: {
    paddingLeft: 15
  },
  wrap__avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#ec5367'
  },
  buttonBox: {
    marginRight: 20
  },
  buttonBox__button: {
    width: 80,
    backgroundColor: '#ec5367',
    borderRadius: 5
  }
})
