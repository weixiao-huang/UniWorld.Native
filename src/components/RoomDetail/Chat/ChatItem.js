/**
 * Created by huangwx on 26/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../common/styles'
import { GoToUser, FetchUser } from '../../../store/actions'

const mapStateToProps = state => ({
  myId: state.user.userInfo.id
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class ChatItem extends Component {
  static propTypes = {
    sender: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }
  _mine = () => (
    this.props.myId === this.props.sender.id
  )
  user = async () => {
    await this.props.dispatch(FetchUser(this.props.sender.id))
    this.props.dispatch(GoToUser(this.props.sender.id))
  }
  render() {
    return (
      <View
        style={[
          styles.fullFlexWidth,
          localStyles.container,
          this._mine() ? localStyles.rowReverse: null,
          this.props.index > 0 ? {marginTop: 0} : null
        ]}
      >
        <View style={[styles.rowFlex, styles.alignCenter, localStyles.sender, this._mine() ? localStyles.rowReverse : null]}>
          <TouchableOpacity onPress={this.user}>
            <Image style={[localStyles.avatar__img]} source={{url: this.props.sender.avatar}}/>
          </TouchableOpacity>
          <View
            style={[
              localStyles.sender__triangle,
              this._mine() ? {transform:[{rotate: '90deg'}], marginTop: 0, marginRight: 5} : null]
            }
          >
          </View>
        </View>
        <View style={[styles.fullFlexWidth, this._mine() ? {justifyContent: 'flex-end', marginRight: -3} : null]}>
          <View style={[localStyles.content]}>
            {this._mine() ? null :
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
    margin: 20,
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
