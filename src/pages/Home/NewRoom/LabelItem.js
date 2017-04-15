/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, TextInput, Switch, StyleSheet } from 'react-native'
import styles from '../../../common/styles'
import I18n from 'react-native-i18n'

import Label from './Label'

export default class LabelItem extends Component {
  static propTypes = {
    labels: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired
  }
  render() {
    return (
      <View style={[styles.rowFlex, styles.whiteBackground, localStyles.container]}>
        <Text style={[localStyles.title]}>
          {I18n.t('NewRoom.input.label.title')}
        </Text>
        <View style={this.props.labels.length > 0 ? [{flexDirection: 'column'}, styles.flex1] : [styles.rowFlex]}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Text style={[styles.contentFontSize, localStyles.button]}>
              {I18n.t('NewRoom.input.label.placeholder')}
            </Text>
          </TouchableOpacity>
          <View>
            {this.props.labels.map((item, index) => {
              return (
                <Label key={index} title={item}/>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  container: {
    borderColor: '#f2f0f4',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  button: {
    color: '#c7c7cd',
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    color: '#6d698b',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold'
  }
})
