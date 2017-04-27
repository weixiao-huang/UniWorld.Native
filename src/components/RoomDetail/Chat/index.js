/**
 * Created by huangwx on 18/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, ListView, KeyboardAvoidingView, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'
import InvertibleScrollView from 'react-native-invertible-scroll-view'

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
      text: '',
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    }
  }
  _sendMessage = () => {
    if (this.state.text) {
      this.props.dispatch(SendMessage({text: this.state.text})(this.props.roomId))
      this.setState({text: ''})
    }
  }
  render() {
    let _listView = ListView
    return (
      <View style={[styles.flex1]}>
        <KeyboardAvoidingView keyboardVerticalOffset={70} behavior={'padding'} style={[styles.flex1]}>
          <ListView
            enableEmptySections={true}
            ref={listView => {_listView = listView}}
            renderScrollComponent={props => <InvertibleScrollView {...props} inverted/>}
            dataSource={this.state.ds.cloneWithRows(this.props.messages)}
            renderRow={(item, sectionID, rowID, highlightRow) => <ChatItem index={parseInt(rowID)} sender={item.sender} content={item.text}/>}
          />
          <View style={[styles.rowFlex, styles.flexCenter, localStyles.footer]}>
            <Image style={[localStyles.footer__icon]} source={require('../../../assets/icon/logoBlue.png')}/>
            <TextInput
              onChangeText={text => this.setState({text})}
              // multiline={true}
              autoFocus={true}
              blurOnSubmit={false}
              value={this.state.text}
              onSubmitEditing={this._sendMessage}
              style={[styles.fullFlexWidth, localStyles.footer__input]}
              onFocus={() => {_listView.scrollTo({y: 0, animated: true})}}
            />
          </View>
        </KeyboardAvoidingView>
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
