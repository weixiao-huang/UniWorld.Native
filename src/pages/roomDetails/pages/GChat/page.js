import React, { Component } from 'react'
import { GiftedChat, Actions, Bubble } from 'react-native-gifted-chat';
import { ListView, Alert, Platform } from 'react-native'
import api from '@/api'
import I18n from '@/locales'
import ImagePicker from 'react-native-image-picker'
import {
} from './style'

export default class GChat extends Component {
  constructor(props) {
    super(props)
    const messages = this.props.messages || []
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2,
    // })
    // this.state = {
    //   messages: ds.cloneWithRows(
    //     messages,
    //     messages.map((_, index) => index).reverse(),
    //   ),
    // }
    this.state = {
      messages,
      text: '',
      isUploading: false,
    }
  }

  renderCustomActions = props => {
    const options = {
      'Image': () => {
        console.log('alert')
        this.sendImg()
      },
      'Action 2': () => {
        console.log('alert')

      },
      'Cancel': () => {},
    }
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderBubble = props => {
    console.log(props)
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#ffffff',
            opacity: 1,
          },
          right: {
            backgroundColor: '#d5d9f0',
            opacity: 1,
          }
        }}
      />
    );
  }

  componentWillReceiveProps(nextProps) {
    const { messages } = nextProps
    if (messages) this.updateNewMessages(messages)
    console.log(this.state.messages)
  }

  updateNewMessages = messages => this.setState({
    messages,
  })

  componentWillMount() {
    // this.setState({
    //   messages: [
    //     {
    //       _id: 1,
    //       text: 'Hello developer',
    //       createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    //       user: {
    //         _id: 2,
    //         name: 'React Native',
    //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //       },
    //     },
    //   ],
    // })
  }

  sendImg = () => {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      cancelButtonTitle: I18n.t('cancel'),
      takePhotoButtonTitle: I18n.t('camera'),
      chooseFromLibraryButtonTitle: I18n.t('photoLibrary'),
      returnBase64Image: true,
      returnIsVertical: false,
    }
    this.setState({ isUploading: true })
    ImagePicker.showImagePicker(options, async res => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        this.setState({ isUploading: false })
      }
      else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
        this.setState({ isUploading: false })
      }
      else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        this.setState({ isUploading: false })
      }
      else {
        console.log(res)
        let formData = new FormData()
        formData.append('image', {
          uri: res.uri,
          name: 'image',
        })
        const res2 = await api.uploadImage(formData)(this.props.roomId)(this.props.token)
      }
    })
  }

  onSend = (messages = []) => {
    console.log('mess', messages)
    const { sendAction, roomId } = this.props
    sendAction({
      text: messages[0].text,
      type: 0,
      room: roomId,
    })
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }


  render() {
    const me = this.props.me
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: me.id,
          name: me.name,
          avatar: me.avatar,
        }}
        renderBubble={this.renderBubble}
        renderActions={this.renderCustomActions}
      />
    )
  }
}
