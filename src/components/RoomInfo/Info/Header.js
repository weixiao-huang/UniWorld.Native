/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from '../../../common/styles'

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired
  }
  render() {
    return (
      <View style={[localStyles.header]}>
        <View style={[styles.fullFlexWidth, localStyles.header__title]}>
          <View style={[localStyles.header__title__tag]}>
            <Text style={[localStyles.header__title__tag__text]}>人气</Text>
          </View>
          <Text style={[styles.flex1, localStyles.header__title__text]}>{this.props.title}</Text>
        </View>
        <View style={[localStyles.des]}>
          <Text style={[localStyles.des__text]}>
            <Icon style={[localStyles.des__icon]} name="ios-information-circle" size={20} color="#ea5569"/> {this.props.description}
          </Text>
        </View>
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  header__title__tag: {
    backgroundColor: '#345586',
    justifyContent: 'center',
    alignItems: 'center',
    padding:2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  header__title__tag__text: {
    color: 'white',
    fontSize: 12,
    fontFamily:'STHeiTiSC-Medium',
    fontWeight:'400'
  },
  header__title__text: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight:'500'
  },
  header__title: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#cdcdcd',
    paddingTop: 10,
    paddingBottom:10
  },
  header: {
    padding: 20
  },
  des__text: {
    fontSize: 16,
    lineHeight: 27,
  },
  des__icon: {
    marginRight: 20
  },
  des: {
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
    paddingBottom: 25,
    paddingTop:10,
    padding:10
  }
})
