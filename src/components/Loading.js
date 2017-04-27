/**
 * Created by huangwx on 27/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { Modal, View, Platform } from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from '../common/styles'

export default class Loading extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired
  }
  static defaultProps = {
    bgColor: 'rgba(0, 0, 0, 0.4)',
    size: 50,
    color: '#FFFFFF',
    type: Platform.OS === 'ios' ? 'ArcAlt' : 'WanderingCubes'
  }
  render() {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={this.props.visible}
      >
        <View style={[styles.flex1, styles.flexCenter, {backgroundColor: this.props.bgColor}]}>
          <Spinner isVisible={this.props.visible} size={this.props.size} color={this.props.color} type={this.props.type}/>
        </View>
      </Modal>
    )
  }
}
