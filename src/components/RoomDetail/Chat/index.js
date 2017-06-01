/**
 * Created by huangwx on 18/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, ListView, KeyboardAvoidingView, TextInput, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'
import ImagePicker from 'react-native-image-picker'
import ImageCropPicker from 'react-native-image-crop-picker'
import InvertibleScrollView from 'react-native-invertible-scroll-view'
// import PushNotification from 'react-native-push-notification'
// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: token => {
//     console.log( 'TOKEN:', token );
//   },
//
//   // (required) Called when a remote or local notification is opened or received
//   onNotification: notification => {
//     console.log( 'NOTIFICATION:', notification );
//   },
//
//   // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
//   senderID: "YOUR GCM SENDER ID",
//
//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true
//   },
//
//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,
//
//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    */
//   requestPermissions: true,
// })


import ChatMenu from './ChatMenu'
import ChatItem from './ChatItem'

import { SendMessage } from '../../../store/actions'

const mapStateToProps = state => ({
  messages: state.user.messages[state.room.roomInfo.id] || [],
  roomId: state.room.roomInfo.id,
})

@connect(mapStateToProps, dispatch => ({ dispatch }))
export default class Chat extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      text: '',
      ds: ds.cloneWithRows(this.props.messages, this.props.messages.map((row, index) => index).reverse()),
      plus: false,
      showMenu: false
    }
  }

  _showMenu(){
    this.setState({
      showMenu:!this.state.showMenu
    })
  }
  _updateNewMessages = messages => {
    this.setState({
      ds: this.state.ds.cloneWithRows(
        messages,
        messages.map((row, index) => index).reverse()
      )
    })
  }

  _sendMessage = async () => {
    global.ws.send(JSON.stringify({
      text: this.state.text,
      type: 0,
      room: this.props.roomId
    }))
    console.log('xxxxxxx')
    if (this.state.text) {
      this.setState({ text: '' })
      //await this.props.dispatch(SendMessage({ text: this.state.text })(this.props.roomId))
      //this._updateNewMessages(this.props.messages)
    }
  }

  _sendImage(){
    console.log(123)
    ImageCropPicker.openPicker({
      width: 400,
      height: 300,
      cropping: true
    }).then(image => {
      console.log(image);
    }, err => {
      console.log('取消')
    })
    this.setState({
      showMenu: false
    })
  }


  componentWillReceiveProps(nextProps) {
    this._updateNewMessages(nextProps.messages)
  }
  render() {
    let _listView = ListView
    return (
      <View style={[styles.flex1]}>
        <KeyboardAvoidingView keyboardVerticalOffset={70} behavior={'padding'} style={[styles.flex1]}>
          <ListView
            enableEmptySections={true}
            ref={listView => { _listView = listView }}
            renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
            dataSource={this.state.ds}
            renderRow={(item, sectionID, rowID, highlightRow) => <ChatItem index={parseInt(rowID)} sender={item.sender} content={item.text} type={item.type} image={item.image} />}
          />
          <View style={[styles.rowFlex, styles.flexCenter, localStyles.footer]}>
            <Image style={[localStyles.footer__icon]} source={require('../../../assets/icon/logoBlue.png')} />
            <View style={{ width: '78%' }}>
              <TextInput
                onChangeText={text => this.setState({ text })}
                // multiline={true}
                autoFocus={true}
                blurOnSubmit={false}
                value={this.state.text}
                onSubmitEditing={this._sendMessage}
                style={[styles.fullFlexWidth, localStyles.footer__input]}
                onFocus={() => { _listView.scrollTo({ y: 0, animated: true }) }}
              />
            </View>

            <Button style={[localStyles.plusButton]} title='+' onPress={this._showMenu.bind(this)}>+</Button>


          </View>
          {this.state.showMenu?<ChatMenu sendImage={this._sendImage.bind(this)}/>:<View/>}
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  footer: {
    backgroundColor: '#f5f5f7',
    // padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    height: 60,
  },
  footer__icon: {
    width: 30,
    height: 30,
    // marginLeft: 10,
    resizeMode: 'contain'
  },
  footer__input: {
    backgroundColor: 'white',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#bababa',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 26,
    height: '100%'
  },
  plus: {
    alignItems: 'center',
    backgroundColor: '#3555b6',
  },
  plusButton: {
    textAlign: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 26,
    color: 'white',
    width: '60%'
  }
})
