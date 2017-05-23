/**
 * Created by huangwx on 18/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import InputItem from '../../InputItem'
import Label from '../../Label'

export default class LabelBox extends Component {
  static propTypes = {
    labels: PropTypes.array.isRequired
  }
  render() {
    return (
      <View style={[localStyles.labelsWrap]}>
        <InputItem inlineStyle={{borderBottomWidth: 0, paddingBottom: 5}} title={I18n.t('Room.Info.label')} titleColor='#3555b6'>
          <View style={[styles.fullFlexWidth, styles.flexWrap]}>
            {this.props.labels.map((item, index) => (
              <Label key={index} title={item.name_en} close={false}/>
            ))}
          </View>
        </InputItem>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  labelsWrap: {
    marginBottom: 10,
  },
})
