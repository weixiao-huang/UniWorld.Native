import React, { Component } from 'react'
import { StyleSheet, View, ListView, Text, Image, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'


export default class ChatMenu extends Component {
  pressNotice() {

  }

  pressQuesstionnaires() {

  }

  pressImage() {
    console.log(this.props)
    this.props.sendImage()
  }
  render() {
    return (
      <View style={[localStyles.menu]}>
        <TouchableOpacity style={[localStyles.menuItem]} onPress={this.pressNotice}>

          <Image style={[localStyles.itemImage]} source={require('../../../assets/icon/trumpet.png'
          )} />
          <Text style={[localStyles.itemText]}>{I18n.t('Room.Chat.notice')}</Text>

      </TouchableOpacity>

        <TouchableOpacity style={[localStyles.menuItem]} onPress={this.pressQuesstionnaires}>

          <Image style={[localStyles.itemImage]} source={require('../../../assets/icon/fill.png'
          )} />
          <Text style={[localStyles.itemText]}>{I18n.t('Room.Chat.questionnaires')}</Text>

      </TouchableOpacity>

        <TouchableOpacity style={[localStyles.menuItem]} onPress={this.pressImage.bind(this)}>

          <Image style={[localStyles.itemImage]} source={require('../../../assets/icon/album.png'
          )} />
          <Text style={[localStyles.itemText]}>{I18n.t('Room.Chat.image')}</Text>

      </TouchableOpacity>
    </View >
        )
  }
}



const localStyles = StyleSheet.create({
  menu: {
    flexDirection:'row',
    justifyContent:'space-around'
  },
  menuItem: {
    paddingTop: 5,
    paddingBottom: 5,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'column',
  },
  itemImage: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    alignSelf:'center',
  },
  itemText: {
    marginTop: 5,
    alignSelf:'center',
    fontSize: 16,
  }
})
