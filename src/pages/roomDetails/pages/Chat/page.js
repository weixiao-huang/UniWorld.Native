import React, { Component } from 'react'
import { ListView, View } from 'react-native'
import InvertibleScrollView from 'react-native-invertible-scroll-view'

import logoBlue from '@/img/icon/logoBlue.png'

import ChatItem from './components/ChatItem'
import ChatMenu from './components/ChatMenu'

import {
  MainView,
  KeyboardAvoidingView,
  FooterView,
  FooterIconImage,
  FooterInput,
  FooterPlusButton,
} from './style'

export default class Chat extends Component {
  constructor(props) {
    super(props)
    // const { messages } = this.props
    const messages = this.props.messages || []
    console.log('roomMessages', this.props.messages)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.state = {
      text: '',
      ds: ds.cloneWithRows(
        messages,
        messages.map((_, index) => index).reverse(),
      ),
      plus: false,
      showMenu: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateNewMessages(nextProps.messages)
  }

  updateNewMessages = messages => {
    console.log('new messages: ', messages)
    this.setState({
      ds: this.state.ds.cloneWithRows(
        messages,
        messages.map((_, index) => index).reverse(),
      ),
    })
  }

  sendMessage = () => {}

  sendImg = () => {}

  render() {
    let listView = ListView
    return (
      <MainView>
        <KeyboardAvoidingView
          keyboardVerticalOffset={70}
          behavior="padding"
        >
          <ListView
            enableEmptySections
            ref={(lv) => { listView = lv }}
            dataSource={this.state.ds}
            renderRow={(item, sectionId, rowId) => (
              <ChatItem
                index={parseInt(rowId, 10)}
                sender={item.sender}
                content={item.text}
                type={item.type}
                image={item.image}
                showTime={item.showTime || null}
              />
            )}
          />
          <FooterView>
            <FooterIconImage source={logoBlue} />
            <FooterInput
              onFocus={() => listView.scrollTo({ y: 0, animated: true })}
              onChangeText={text => this.setState({ text })}
              onSubmitEditing={this.sendMessage}
              value={this.state.text}
              blurOnSubmit={false}
              autoFocus
            />
            <FooterPlusButton
              title={this.state.showMenu ? '-' : '+'}
              onPress={() => this.setState({ showMenu: !this.state.showMenu })}
            />
          </FooterView>
          {this.state.showMenu && <ChatMenu
            sendImg={this.sendImg}
          />}
        </KeyboardAvoidingView>
      </MainView>
    )
  }
}
