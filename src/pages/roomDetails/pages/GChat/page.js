import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import {
} from './style'

export default class GChat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
  }

  onSend = (messages = []) => {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
          name: 'huangwx',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        }}
      />
    )
  }
}
