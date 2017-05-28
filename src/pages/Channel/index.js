import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Text, Modal, Platform } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import {
} from '../../store/actions'


import RoomWrap from '../../components/RoomWrap'

import Loading from '../../components/Loading'

const mapStateToProps = state => ({
  channels: state.room.channels
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Input extends Component {
  constructor(props){
    super(props)
    let channel = this.props.channels[global.channelId]
    this.state={
      cover: channel.cover,
    }
  }




  render(){
    return(
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{height: 20, backgroundColor: '#ec5367', width: '100%'}}/>
        <Image style={[localStyles.smallPoster]} source={{uri: this.state.cover}} />
        {/*<RoomWrap titleLabel="HOT" roomList={this.props.world.results} />*/}
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  smallPoster: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    height: 112.5,
    width: 345,
    borderRadius: 16,
  },
})
