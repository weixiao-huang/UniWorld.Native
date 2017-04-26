/**
 * Created by huangwx on 26/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../common/styles'
import { GoToUser, FetchUser } from '../../../store/actions'

@connect(...[, dispatch => ({dispatch})])
export default class ChatItem extends Component {
  static propTypes = {
    sender: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired
  }
  static defaultProps = {
    mine: false
  }
  user = async () => {
    await this.props.dispatch(FetchUser(this.props.sender.id))
    this.props.dispatch(GoToUser(this.props.sender.id))
  }
  render() {
    return (
      <View style={[styles.fullFlexWidth, localStyles.container, this.props.mine ? localStyles.rowReverse: null]}>
        <View style={[styles.rowFlex, styles.alignCenter, localStyles.sender, this.props.mine ? localStyles.rowReverse : null]}>
          <TouchableOpacity onPress={this.user}>
            <Image style={[localStyles.avatar__img]} source={{url: this.props.sender.avatar}}/>
          </TouchableOpacity>
          <View
            style={[
              localStyles.sender__triangle,
              this.props.mine ? {transform:[{rotate: '90deg'}], marginTop: 0} : null]
            }
          >
          </View>
        </View>
        <View style={[styles.fullFlexWidth, this.props.mine ? {justifyContent: 'flex-end', marginRight: -3} : null]}>
          <View style={[localStyles.content]}>
            {this.props.mine ? null :
              <Text style={[localStyles.content__title]}>{this.props.sender.name}</Text>
            }
            <View style={[localStyles.content__text]}>
              <Text>{this.props.content}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const labelWidth = 5
const size = 40
const labelBgColor = 'white'
const localStyles = StyleSheet.create({
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  container: {
    alignItems: 'flex-start',
    margin: 16,
    marginBottom: 0
  },
  sender: {
  },
  content: {
    alignItems: 'flex-start'
  },
  content__title: {
    fontSize: 12,
    marginBottom: 2
  },
  avatar__img: {
    width: size,
    height: size,
    borderRadius: size / 2
  },
  content__text: {
    marginTop: 4,
    backgroundColor: 'white',
    padding: 8,
    marginLeft: -3,
    borderRadius: 5
  },
  sender__triangle: {
    marginTop: 20,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: labelWidth,
    borderRightWidth: labelWidth,
    borderBottomWidth: labelWidth,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: labelBgColor,
    transform: [
      {rotate: '-90deg'}
    ]
  }
})
