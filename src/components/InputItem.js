/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styles from '../common/styles'

export default class InputItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    return (
      <View style={[inputStyles.view, styles.whiteBackground, this.props.inlineStyle]}>
        <Text style={[inputStyles.title, this.props.textStyle, {color: this.props.titleColor?this.props.titleColor:'#332f5e', width:this.props.titleWidth?this.props.titleWidth:'auto'}]}>
          {this.props.title}
        </Text>
        {this.props.children}
      </View>
    )
  }
}

export class InputItem2 extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    return (
      <View style={[inputStyles.view2, styles.whiteBackground, this.props.inlineStyle]}>
        <Text style={[inputStyles.title2, this.props.textStyle, {color: this.props.titleColor?this.props.titleColor:'#332f5e', width:this.props.titleWidth?this.props.titleWidth:'auto'}]}>
          {this.props.title}
        </Text>
        {this.props.children}
      </View>
    )
  }
}

const inputStyles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f2f0f4',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  view2:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f2f0f4',
    borderBottomWidth: 1,
    paddingTop: 3,
    paddingBottom: 3,
  },

  title: {
    // padding: 10,
    marginLeft: 15,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight:44
  },
  title2: {
    // padding: 10,
    marginLeft: 10,
    marginRight: 5,
  }
})
