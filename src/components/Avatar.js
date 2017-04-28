/**
 * Created by huangwx on 19/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { GoToUser } from '../store/actions'

@connect(...[, dispatch => ({dispatch})])
export default class Avatar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false
    }
  }
  static propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired
  }
  static defaultProps = {
    size: 70
  }

  _gotoUser = id => () => {
    this.setState({disabled: true})
    this.props.dispatch(GoToUser(id))
    setTimeout(() => this.setState({disabled: false}), 1000)
  }

  render() {
    return (
      <TouchableOpacity
        disabled={this.state.disabled}
        onPress={this._gotoUser(this.props.id)}
      >
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
