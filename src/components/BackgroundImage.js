/**
 * Created by huangwx on 10/04/2017.
 */
import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image } from 'react-native'

export default class BackgroundImage extends Component {
  static defaultProps = {
    inlineStyle: {}
  }
  static propTypes = {
    inlineStyle: PropTypes.object
  }

  render() {
    return (
      <Image
        source={this.props.bgUrl}
        style={[styles.backgroundImage, this.props.inlineStyle]}
      >
        {this.props.children}
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
})

