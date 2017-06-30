import React, { Component } from 'react'
import { ListView } from 'react-native'
// import ImageCropPicker from 'react-native-image-crop-picker'
import InvertibleScrollView from 'react-native-invertible-scroll-view'
import I18n from '@/locales'

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
      ds: ds.cloneWithRows(
        messages,
        messages.map((_, index) => index).reverse(),
      ),
      text: '',
      isUploading: false,
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

  sendMessage = () => {
    if (this.state.text) {
      const { sendAction, roomId } = this.props
      sendAction({
        text: this.state.text,
        type: 0,
        room: roomId,
      })
      this.setState({ text: '' })
    }
  }

  sendImg = () => {
    // const options = {
    //   title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
    //   cancelButtonTitle: 'Cancel',
    //   takePhotoButtonTitle: 'Take Photo...',
    //   chooseFromLibraryButtonTitle: 'Choose from Library...',
    //   returnBase64Image: true,
    //   returnIsVertical: false,
    // }
    // this.setState({ isUploading: true })
    // ImagePicker.showImagePicker(options, async res => {
    //   if (res.didCancel) {
    //     console.log('User cancelled image picker')
    //     this.setState({isUploading: false})
    //   }
    //   else if (res.error) {
    //     console.log('ImagePicker Error: ', res.error)
    //     this.setState({isUploading: false})
    //   }
    //   else if (res.customButton) {
    //     console.log('User tapped custom button: ', res.customButton)
    //     this.setState({isUploading: false})
    //   }
    //   else {
    //     console.log(res)
    //     let formData = new FormData()
    //     formData.append('image',{
    //     uri: res.uri,
    //     name: 'image',
    // })
    //     const res2 =await api.uploadImage(formData)(this.props.roomId)(this.props.token)
    //   }
    // })
    // this.setState({
    //   showMenu: false
    // })
  }

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
                mine={item.sender.id === this.props.myId}
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
