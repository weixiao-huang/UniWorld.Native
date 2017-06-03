/**
 * Created by huangwx on 18/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, View, ListView, KeyboardAvoidingView, TextInput, Image, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'
import ImagePicker from 'react-native-image-picker'
import ImageCropPicker from 'react-native-image-crop-picker'
import InvertibleScrollView from 'react-native-invertible-scroll-view'
import api from '../../../api'
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

import { SendMessage, SetUnreadZero } from '../../../store/actions'

const mapStateToProps = state => ({
  messages: state.user.messages[state.room.roomInfo.id] || [],
  roomId: state.room.roomInfo.id,
  unreadMessages: state.user.unreadMessages,
  token: state.auth.token
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
    this.props.dispatch(SetUnreadZero(this.props.roomId))
  }

  _getShowTime(){
    let showTime = null
    let time1 = null
    let time2 = null
    for (let index in this.state.ds._dataBlob){
      if (time1 == null){
        time1 = new Date (this.state.ds._dataBlob[index].time)
        this.state.ds._dataBlob[index].showTime = time1.toTimeString().split(':').splice(0, 2).join(':')
      }
      else {
        time2 = new Date(this.state.ds._dataBlob[index].time)
        if (time2 - time1 > 600000){
          time2 = time1
          this.state.ds._dataBlob[index].showTime = time1.toTimeString().split(':').splice(0, 2).join(':')
        }
      }
    }
  }

  componentWillMount(){
    // this._getShowTime()

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
    console.log('发消息啦啦啦啦啦啦啦啦啦啦啦啦啦')
    if (this.state.text) {
      this.setState({ text: '' })
      //await this.props.dispatch(SendMessage({ text: this.state.text })(this.props.roomId))
      //this._updateNewMessages(this.props.messages)
    }
  }

  _sendImage =  () => {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      returnBase64Image: true,
      returnIsVertical: false
    }
    this.setState({isUploading: true})
    ImagePicker.showImagePicker(options, async res => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        this.setState({isUploading: false})
      }
      else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
        this.setState({isUploading: false})
      }
      else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        this.setState({isUploading: false})
      }
      else {
        console.log(res)
        let formData = new FormData()
        formData.append('image',{
        uri: res.uri,
        name: 'image',
    })
        const res2 =await api.uploadImage(formData)(this.props.roomId)(this.props.token)
      }
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
    console.log(this.state.ds)
    return (
      <View style={[styles.flex1]}>
        <KeyboardAvoidingView keyboardVerticalOffset={70} behavior={'padding'} style={[styles.flex1]}>
          <ListView
            enableEmptySections={true}
            ref={listView => { _listView = listView }}
            renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
            dataSource={this.state.ds}
            renderRow={(item, sectionID, rowID, highlightRow) => <ChatItem index={parseInt(rowID)} sender={item.sender} content={item.text} type={item.type} image={item.image} showTime={item.showTime?item.showTime:null} />}
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
    fontSize: 30,
    color: 'white',
    width: '60%'
  }
})
