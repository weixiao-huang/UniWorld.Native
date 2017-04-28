/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../../common/styles'

@connect(state => ({isEditing: state.user.isEditing}), dispatch => ({dispatch}))
export  default class LabelItem extends Component {
  render () {
    return (
      <View style={[styles.flex1, localStyles.container]}>
        <View style={[localStyles.inputBox]}>
          <Text style={[localStyles.title]}>{this.props.title}</Text>
          {this.props.isEditing && this.props.editable ?
            <TextInput
              style={[styles.flex1, localStyles.content, localStyles.inputBox__input]}
              placeholder={this.props.content}
            /> :
            <Text style={[localStyles.content]}>{this.props.content}</Text>
          }
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  title: {
    color: '#95a8e2',
    paddingLeft: 10,
  },
  content: {
    paddingLeft: 15,
    fontSize: 14
  },
  inputBox__input: {
    fontSize: 14
  },
  inputBox: {
    padding: 10,
    flexDirection: 'row',
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'center',
  }
})
