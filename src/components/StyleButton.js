import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

export default class StyleButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
  }
  static defaultProps = {
    color: 'white',
    disabled: false
  }
  render () {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.button, this.props.inlineStyle]}
        disabled={this.props.disabled}
      >
        <Text style={[{color: this.props.color}, this.props.textStyle]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a55b7d',
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
