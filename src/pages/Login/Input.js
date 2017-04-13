import React, { Component, PropTypes } from 'react';
import { StyleSheet, TextInput, Image, View} from 'react-native'

const inputHeight = 45
const iconSize = 18

const inputStyles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: inputHeight,
    paddingLeft: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    fontSize: 14
  },
  icon: {
    position: 'absolute',
    width: iconSize,
    height: iconSize,
    margin: parseInt((inputHeight - iconSize) / 2),
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default class Input extends Component {
  render () {
    return (
      <View style={inputStyles.view}>
        <TextInput
          autoCorrect={false}
          style={inputStyles.input}
          autoCapitalize='none'
          {...this.props}
        />
        <Image
          source={this.props.icon}
          style={inputStyles.icon}
        />
      </View>
    )
  }
}

