/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TextInput, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import InputItem from '../../../components/InputItem'

export default class InputBox extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    components: PropTypes.array.isRequired
  }

  render() {
    return (
      <View>
        <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <Image
            style={[localStyles.icon]}
            source={require('../../../assets/icon/logoBlue.png')}
          />
          <Text style={[{color: '#3555b6'}, this.props.titleStyles]}>Required</Text>
        </View>
        <View>
          {this.props.components.map(component => (
            <InputItem title={component.title} titleWidth={75}>
              {component.content}

            </InputItem>
          ))}
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  titleStyles: {
    color: '#3555b6'
  }
})
