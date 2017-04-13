/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet } from 'react-native'
import styles from '../../../common/styles'

export default class RoomList extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: '列表',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../../assets/icon/myRoomR.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

