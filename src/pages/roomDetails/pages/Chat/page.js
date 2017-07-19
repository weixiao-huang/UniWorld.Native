import React, { Component } from 'react'
import { ListView, ActivityIndicator } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import InvertibleScrollView from 'react-native-invertible-scroll-view'
import shortid from 'shortid'

import I18n from '@/locales'
import api from '@/api'
import logoBlue from '@/img/icon/logoBlue.png'
import ChatItem from './components/ChatItem'
import ChatMenu from './components/ChatMenu'

import {
  MainView,
  FooterContainerView,
  FooterView,
  KeyboardAvoidingView,
  FooterIconImage,
  FooterInput,
  FooterPlusButton,
  SocketBreakView,
  SocketBreakText,
} from './style'

export default class Chat extends Component {
  constructor(props) {
    super(props)
    const messages = this.props.messages || []
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    const { id, avatar, signature, name } = this.props.me
    this.state = {
      ds: ds.cloneWithRows(
        messages,
        messages.map((_, index) => index).reverse(),
      ),
      text: '',
      isUploading: false,
      plus: false,
      showMenu: false,
      defaultSender: { id, avatar, signature, name },
    }
  }

  componentWillReceiveProps(nextProps) {
    const { messages } = nextProps
    if (messages) this.updateNewMessages(messages)
  }

  onFocus = () => {
    this.listView.scrollTo({ y: 0, animated: true })
    this.hideMenu()
  }

  updateNewMessages = messages => this.setState({
    ds: this.state.ds.cloneWithRows(
      messages.slice(),
      messages.map((_, index) => index).reverse(),
    ),
  })

  sendMessage = () => {
    if (this.state.text) {
      const { sendAction, roomId } = this.props
      sendAction({
        text: this.state.text,
        type: 0,
        room: roomId,
        local_id: shortid.generate(),
      })
      this.setState({ text: '' })
    }
  }

  sendImg = () => {
    const { roomId, token } = this.props
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      rotation: true,
      allowsEditing: true,
      cancelButtonTitle: I18n.t('cancel'),
      takePhotoButtonTitle: I18n.t('camera'),
      chooseFromLibraryButtonTitle: I18n.t('photoLibrary'),
      returnBase64Image: true,
      returnIsVertical: false,
    }
    this.setState({ isUploading: true })
    ImagePicker.showImagePicker(options, async (res) => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        this.setState({ isUploading: false })
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
        this.setState({ isUploading: false })
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        this.setState({ isUploading: false })
      } else {
        console.log(res)
        const formData = new FormData()
        formData.append('image', {
          uri: res.uri,
          name: 'image',
        })
        await api.uploadImage(formData)(roomId)(token)
      }
    })
    this.setState({ showMenu: false })
  }

  plus = () => {
    const { showMenu } = this.state
    if (showMenu) this.input.focus()
    else this.input.blur()
    this.setState({ showMenu: !this.state.showMenu })
  }

  hideMenu = () => {
    if (this.state.showMenu) this.setState({ showMenu: false })
  }

  renderFooter = () => (
    <FooterContainerView>
      <FooterView>
        <FooterIconImage source={logoBlue} />
        <FooterInput
          innerRef={(e) => { this.input = e }}
          onFocus={this.onFocus}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={this.sendMessage}
          value={this.state.text}
          blurOnSubmit={false}
          autoFocus
          returnKeyType="send"
          enablesReturnKeyAutomatically
          clearButtonMode="unless-editing"
        />
        <FooterPlusButton
          title={this.state.showMenu ? ' - ' : ' + '}
          onPress={this.plus}
          sendImg={this.sendImg}
        />
      </FooterView>
      {this.state.showMenu && <ChatMenu
        sendImg={this.sendImg}
      />}
    </FooterContainerView>
  )

  render() {
    const { socketConnectStatus, socketReconnect } = this.props
    const { defaultSender } = this.state
    this.listView = ListView
    return (
      <MainView>
        {!socketConnectStatus && <SocketBreakView>
          <ActivityIndicator animating color="#414755" />
          <SocketBreakText>
            {socketReconnect ?
              '网络断了哦，正在尝试连接中' :
              '失去连接，尝试重启应用'}
          </SocketBreakText>
        </SocketBreakView>}
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={
            socketConnectStatus ? 114 : 144
          }
        >
          <ListView
            enableEmptySections
            ref={(lv) => { this.listView = lv }}
            dataSource={this.state.ds}
            onScroll={this.hideMenu}
            renderScrollComponent={props => (
              <InvertibleScrollView {...props} inverted />
            )}
            renderRow={(item, sectionId, rowId) => (
              <ChatItem
                key={item.id}
                sending={item.sending}
                index={parseInt(rowId, 10)}
                sender={item.sender || defaultSender}
                content={item.text}
                type={item.type}
                image={item.image}
                showTime={item.showTime || null}
                mine={(item.sender || defaultSender).id === this.props.myId}
              />
            )}
          />
          {this.renderFooter()}
        </KeyboardAvoidingView>
      </MainView>
    )
  }
}
