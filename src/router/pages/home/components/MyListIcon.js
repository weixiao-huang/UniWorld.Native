import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Image, StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  unreadMessages: state.auth.token && state.auth.unreadMessages,
})

const styles = StyleSheet.create({
  icon: {
    height: '100%',
    resizeMode: 'contain',
  },
  messagesText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  messagesItem: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEAC4E',
    right: 20,
    top: -4,
    width: 21,
    height: 21,
    borderRadius: 10,
  },
})

const listIcon = require('../../../img/myRoom.png')

const MessageItemView = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: #feac4e;
  right: 20px;
  top: -4px;
  width: 21px;
  height: 21px;
  border-radius: 10px;
`

@connect(mapStateToProps)
export default class MyListIcon extends Component {
  render() {
    const { unreadMessages, tintColor } = this.props
    const unread = unreadMessages &&
          unreadMessages.length > 0 &&
          Object.values(unreadMessages).reduce(
            (a, b) => a + b,
          )
    return (
      <View>
        {unread ? <MessageItemView>
          <Text style={[styles.messagesText]}>{unread}</Text>
        </MessageItemView> : null}
        <Image
          source={listIcon}
          style={[styles.icon, { tintColor }]}
        />
      </View>
    )
  }
}
