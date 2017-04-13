/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet } from 'react-native'
import styles from '../../../common/styles'

export default class NewRoom extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: ' ',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../../assets/icon/SmileR.png')}
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

