/**
 * Created by huangwx on 19/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'
import styles from '../../../common/styles'

import Avatar from '../../../components/Avatar'

const mapStateToProps = state => ({
  participants: state.room.roomInfo.participants
})

@connect(mapStateToProps)
export default class AvatarBox extends Component {
  render() {
    return (
      <View style={[styles.whiteBackground, localStyles.container]}>
        <View style={[styles.rowFlex, localStyles.title]}>
          <Text style={[localStyles.title__text]}>{I18n.t('Room.Detail.Member.title')}</Text>
          <Text style={[{color: 'red'}, localStyles.title__text]}>
            {`(${this.props.participants.length})`}
          </Text>
        </View>
        <View style={[styles.rowFlex, styles.flexWrap, localStyles.wrap]}>
          {this.props.participants.map((item, index) =>
            <View style={[styles.flexCenter, localStyles.icon]} key={index}>
              <Avatar size={60} id={item.id} avatar={item.avatar}/>
              <Text style={[localStyles.icon__text]}>{item.name}</Text>
            </View>
          )}
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15
  },
  title: {
    paddingBottom: 10
  },
  title__text: {
    fontSize: 16
  },
  wrap: {
    padding: 5
  },
  icon: {
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
  icon__text: {
    paddingTop: 10
  }
})
