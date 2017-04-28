/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, View, Button, StyleSheet } from 'react-native'
import styles from '../../../common/styles'
import Tester from '../../../components/Tester'

export default class Smile extends React.Component {
  render() {
    return (
      <View style={[styles.flex1, styles.flexCenter]}>
        {/*<Tester/>*/}
        {/*<Button*/}
          {/*onPress={() => this.props.navigation.goBack()}*/}
          {/*title="Go back home"*/}
        {/*/>*/}
        <Image style={[localStyles.cover]} source={require('../../../assets/emptyList.png')}/>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  cover: {
    resizeMode: 'contain',
    width: '80%'
  }
})
