/**
 * Created by huangwx on 18/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'
import ChatItem from './ChatItem'

import { SendMessage } from '../../../store/actions'

const mapStateToProps = state => ({
  messages: state.user.messages[state.room.roomInfo.id] || [],
  roomId: state.room.roomInfo.id
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  _sendMessage = () => {
    if (this.state.text) {
      this.props.dispatch(SendMessage({text: this.state.text})(this.props.roomId))
      this.setState({text: ''})
    }
  }
  render() {
    return (
      <View style={[styles.flex1]}>
        <View style={[styles.flex1]}>
          <ScrollView>
            {this.props.messages.map((item, index) => (
              <ChatItem key={index} sender={item.sender} content={item.text}/>
            ))}
          </ScrollView>
        </View>
        <View style={[styles.rowFlex, styles.flexCenter, localStyles.footer]}>
          <Image style={[localStyles.footer__icon]} source={require('../../../assets/icon/logoBlue.png')}/>
          <TextInput
            onChangeText={text => this.setState({text})}
            // multiline={true}
            value={this.state.text}
            onSubmitEditing={this._sendMessage}
            style={[styles.fullFlexWidth, localStyles.footer__input]}
          />
        </View>
        <KeyboardSpacer/>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  footer: {
    backgroundColor: '#f5f5f7',
    padding: 10,
    height: 60
  },
  footer__icon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    resizeMode: 'contain'
  },
  footer__input: {
    backgroundColor: 'white',
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#bababa',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  }
})
