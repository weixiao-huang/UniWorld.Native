import React, { Component } from 'react'
import { ListView } from 'react-native'
import InvertibleScrollView from 'react-native-invertible-scroll-view'

import logoBlue from '@/img/icon/logoBlue.png'

import ChatItem from './components/ChatItem'

import {
  MainView,
  KeyboardAvoidingView,
  FooterView,
  FooterIconImage,
  FooterInput,
} from './style'

export default class Chat extends Component {
  constructor(props) {
    super(props)
    const { messages } = this.props
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

  sendMessage = () => {}

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
            renderScrollComponent={props => (
              <InvertibleScrollView
                {...props}
                inverted
              />
            )}
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
          </FooterView>
        </KeyboardAvoidingView>
      </MainView>
    )
  }
}
