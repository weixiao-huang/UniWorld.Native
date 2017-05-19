/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native'
import styles from '../../../common/styles'
import Tester from '../../../components/Tester'

export default class Smile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  onPress = () => {
    
    this.setState((prevState) => {
      return { number: prevState.number + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    console.log(111)
    this.setState((prevState) => {
      return { number: prevState.number + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    console.log(222)
  }
  render() {
    return (
      <View style={[styles.flex1, styles.flexCenter]}>
        {/*<Tester/>*/}
        {/*<Button*/}
        {/*onPress={() => this.props.navigation.goBack()}*/}
        {/*title="Go back home"*/}
        {/*/>*/}
        <View>
          <Text>{this.state.number}</Text>
          <TouchableOpacity onPress={this.onPress}>
            <Text>点我加2</Text>
          </TouchableOpacity>
        </View>
        <Image style={[localStyles.cover]} source={require('../../../assets/emptyList.png')} />
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
