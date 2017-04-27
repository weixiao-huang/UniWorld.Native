/**
 * Created by huangwx on 19/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import Avatar from '../../../components/Avatar'

const gapPadding = 15
const boxPadding = 5
const avatarPadding = 10
const numPerRow = 4

const avatarSize = (Dimensions.get('window').width - 2 * gapPadding - 2 * boxPadding) / numPerRow - 2 * avatarPadding
const titleWidth = avatarSize + 2 * avatarPadding

const mapStateToProps = state => ({
  participants: state.room.roomInfo.participants
})

@connect(mapStateToProps)
export default class AvatarBox extends Component {
  render() {
    const length = 7
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
            <View style={[localStyles.icon, styles.alignCenter]} key={index}>
              <Avatar size={avatarSize} id={item.id} avatar={item.avatar}/>
              <Text style={[{width: 60, textAlign: 'center', lineHeight: 18}, localStyles.icon__text]}>{item.name.length > length ? item.name.slice(0, length) + '...' : item.name}</Text>
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
    padding: gapPadding
  },
  title: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f0f4',
  },
  title__text: {
    fontSize: 16
  },
  wrap: {
    padding: boxPadding,
  },
  icon: {
    padding: 5,
    paddingLeft: avatarPadding,
    paddingRight: avatarPadding,
    width: titleWidth
  },
  icon__text: {
    paddingTop: 10
  }
})
