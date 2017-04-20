/**
 * Created by huangwx on 18/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'

import InputItem from '../InputItem'

export default class Info extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  render() {
    const { user } = this.props
    return (
      <View>
        <View style={[localStyles.wrap]}>
          <InputItem title={I18n.t('Me.info.gender')}>
            <Text style={[styles.fullFlexWidth]}>
              {user.gender === true ? I18n.t('Gender.male') : user.gender === false ? I18n.t('Gender.female') : 'Secret'}
            </Text>
          </InputItem>
          <InputItem title={I18n.t('Me.info.school')}>
            <Text style={[styles.fullFlexWidth]}>
              {user.university.name_en}
            </Text>
          </InputItem>
          <InputItem title={I18n.t('Me.info.department')}>
            <Text style={[styles.fullFlexWidth]}>
              {user.department}
            </Text>
          </InputItem>
          <InputItem title={I18n.t('Me.info.grade')}>
            <Text style={[styles.fullFlexWidth]}>
              {user.year}
            </Text>
          </InputItem>
        </View>
        <View style={[localStyles.wrap]}>
          <InputItem title={I18n.t('dislikes')}>
            <Text style={[styles.fullFlexWidth, {fontWeight: 'bold'}]}>
              {user.thumb_downs}
            </Text>
          </InputItem>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  wrap: {
    marginBottom: 10
  }
})
