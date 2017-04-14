/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, Button, StyleSheet } from 'react-native'
import styles from '../../../common/styles'

export default class NewRoom extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

