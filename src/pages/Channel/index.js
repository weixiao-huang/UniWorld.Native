import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Text, Modal, Platform } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import api from '../../api'
import { server } from '../../common/constants'

import RoomWrap from '../../components/RoomWrap'

import Loading from '../../components/Loading'

const mapStateToProps = state => ({
    token: state.auth.token
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Input extends Component {
  constructor(props){
    super(props)
    this.state={
      id: global.channelId,
      searchResult: []
    }
  }

  componentWillMount = async () => {
    this.setState({searchResult: []})
    try {
      const res = await api.fetchDataFromUrl(`${server}/channel/${global.channelId}/`)(this.props.token)
      console.log(res)
      if (res.status === 200) {
        const data = await res.json()
        console.log(data)
        if (data.rooms && data.rooms.length > 0) {
          this.setState({
            searchResult: data.rooms,
            next: data.next,
            cover: data.cover
          })
        }
        this.setState({name: ''})
      }
    } catch (e) {
      console.log(e)
    }
  }

   _showNext = async () => {
    this.setState({isFetching: true})
    try {
      const res = await api.fetchDataFromUrl(this.state.next)(this.props.token)
      console.log(res)
      if (res.status === 200) {
        const data = await res.json()
        this.setState({searchResult: this.state.searchResult.concat(data.results), next: data.next})
      }
    } catch (e) {
      console.log(e)
    }
    this.setState({isFetching: false})
  }


  render(){
    return(
      <ScrollView style={[styles.flex1, localStyles.container]}>
        <View style={{height: 20, backgroundColor: '#ec5367', width: '100%'}}/>
        <Image style={[localStyles.smallPoster]} source={{uri: this.state.cover}} />
        { this.state.searchResult.length > 0 ?
          <RoomWrap roomList={this.state.searchResult} />
          :
          <View style={[styles.flex1, styles.flexCenter]}>
            {/*<Image style={[localStyles.cover]} source={require('../../assets/emptyList.png')}/>*/}
          </View>
        }
        {this.state.isFetching ?
          <ActivityIndicator
            style={{ height: 40 }}
            animating={this.state.isFetching}
          /> :
          this.state.next && <TouchableOpacity>
            <Text
              style={[localStyles.next]}
              onPress={this._showNext}
            >
              {I18n.t('RoomList.searchNext')}
            </Text>
          </TouchableOpacity>
        }
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

  container: {
    backgroundColor: 'white'
  },
  cover: {
    resizeMode: 'contain',
    width: '70%',
  },
  next: {
    textAlign: 'center',
    color: '#aaa',
    padding: 10
  },
  inputBox: {
    padding: 5,
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  input: {
    backgroundColor: '#eee',
    paddingLeft: 10
  },
  button: {
    marginLeft: 15,
    marginRight: 15,
    color: '#6485ed'
  }
})
