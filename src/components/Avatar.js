/**
 * Created by huangwx on 19/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'

import { FetchUser, GoToUser } from '../store/actions'

@connect(...[, dispatch => ({dispatch})])
export default class Avatar extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired
  }
  static defaultProps = {
    size: 70
  }

  @autobind
  _gotoUser(id) {
    return async () => {
      await this.props.dispatch(FetchUser(id))
      this.props.dispatch(GoToUser(id))
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this._gotoUser(this.props.id)}>
        <Image
          style={[localStyles.avatar, {width: this.props.size, height: this.props.size, borderRadius: this.props.size / 2}]}
          source={{uri: this.props.avatar}}/>
      </TouchableOpacity>
    )
  }
}

const localStyles = StyleSheet.create({
  avatar: {
    borderWidth: 1,
    borderColor: '#ec5367'
  },
})
