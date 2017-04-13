import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

const buttonHeight = 45

export default class StyleButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
  }
  static defaultProps = {
    color: 'white'
  }
  render () {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.button, this.props.inlineStyle]}
      >
        <Text style={{color: this.props.color}}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a55b7d',
    borderRadius: 10,
    height: buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
