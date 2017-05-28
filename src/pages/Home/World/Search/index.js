/**
 * Created by huangwx on 11/04/2017.
 */
import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView, TextInput, View, TouchableOpacity, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import api from '../../../../api'
import { server } from '../../../../common/constants'

import RoomWrap from '../../../../components/RoomWrap'

import styles from '../../../../common/styles'

const mapStateToProps = state => ({
  token: state.auth.token
})

@connect(mapStateToProps)
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      searchResult: [],
      next: null,
      isFetching: false
    }
  }

  search = async () => {
    this.setState({searchResult: []})
    try {
      const res = await api.fetchDataFromUrl(`${server}/room/search/?title=${this.state.name}`)(this.props.token)
      if (res.status === 200) {
        const data = await res.json()
        console.log(data)
        if (data.results && data.results.length > 0) {
          this.setState({
            searchResult: data.results,
            next: data.next
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

  render () {
    return (
      <ScrollView style={[styles.flex1, localStyles.container]}>
        <View style={[styles.flexCenter, localStyles.inputBox]}>
          <TextInput
            style={[styles.flex1, localStyles.input]}
            placeholder="Search by name"
            value={this.state.name}
            onChangeText={name => this.setState({name})}
          />
          <TouchableOpacity onPress={this.search}>
            <Text style={localStyles.button}>
              {I18n.t('World.Search.button')}
            </Text>
          </TouchableOpacity>
        </View>
        { this.state.searchResult.length > 0 ?
          <RoomWrap roomList={this.state.searchResult} />
          :
          <View style={[styles.flex1, styles.flexCenter]}>
            <Image style={[localStyles.cover]} source={require('../../../../assets/emptyList.png')}/>
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
