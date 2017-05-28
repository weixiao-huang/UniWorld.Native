import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

import { GoToChannel } from '../../../../store/actions'
import { connect } from 'react-redux'

@connect(dispatch => ({dispatch}))
class ChannelItem extends Component {
  constructor(props) {
    super(props)
  }
  onPress() {
    global.channelId = this.props.channel.id
    this.props.dispatch(GoToChannel(global.channelId))
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)} style={[localStyles.channelItem]}>
        <Image source={{ url: this.props.channel.icon }} style={[localStyles.channelCover]} />
        <Text style={[localStyles.channelName]}>{this.props.channel.title}</Text>
      </TouchableOpacity>
    )
  }
}

export default class ChannelList extends Component {
  render() {
    return (
      <View style={[localStyles.channelList]}>
        {this.props.channels && this.props.channels.map((channel) => <ChannelItem key={channel.id} channel={channel} />)}
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  channelItem: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 90
  },
  channelCover: {
    width: 49,
    height: 49,
    borderRadius: 24.5
  },
  channelName: {
    fontSize: 13,
    paddingTop: 9
  },
  channelList: {
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-around',
    paddingBottom: 10,
    borderBottomColor: '#E7E7EB',
    borderBottomWidth: 1
  }
})
