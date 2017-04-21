/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, ListView, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import RoomWrap from '../../../../components/RoomWrap'
// import GiftedListView from 'react-native-gifted-listview'

import api from '../../../../api'
import Button from '../../../../components/StyleButton'

const mapStateToProps = state => ({
  latest: state.room.latest,
  world: state.room.world,
  token: state.auth.token
})

@connect(mapStateToProps)
export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
      next: this.props.world.next,
      data: []
    }
  }

  fetchNextRoomList = async () => {
    try {
      if (this.state.next) {
        const res = await api.fetchDataFromUrl(this.state.next)(this.props.token)
        if (res.status === 200) {
          const data = await res.json()
          this.setState({
            next: data.next,
            data: this.state.data.concat({title: '', content: data.results})
          })
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  _renderRowView = item => <RoomWrap title={item.title} roomList={item.content}/>

  _onFetch = async () => {
    try {
      if (this.state.next) {
        this.setState({isFetching: true})
        const res = await api.fetchDataFromUrl(this.state.next)(this.props.token)
        if (res.status === 200) {
          const data = await res.json()
          this.setState({
            next: data.next,
            data: this.state.data.concat({title: '', content: data.results})
          })
        }
        this.setState({isFetching: false})
      }
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <View>
        {/*<GiftedListView*/}
          {/*rowView={this._renderRowView}*/}
          {/*onFetch={this._onFetch}*/}
          {/*firstLoader={true}*/}
          {/*pagination={true}*/}
          {/*refreshable={true}*/}
          {/*withSections={false}*/}
          {/*customStyles={{*/}
            {/*paginationView: {*/}
              {/*backgroundColor: '#eee',*/}
            {/*},*/}
          {/*}}*/}
          {/*refreshableTintColor="blue"*/}
        {/*/>*/}
        <View>
          <RoomWrap title={I18n.t('World.Square.latest')} roomList={this.props.latest.results}/>
          <RoomWrap title={I18n.t('World.Square.world')} roomList={this.props.world.results}/>
          {this.state.data.map((item, index) =>
            <RoomWrap key={index} title={item.title} roomList={item.content}/>)
          }
        </View>
        {this.state.isFetching ?
          <ActivityIndicator
            style={{height: 40}}
            animating={this.state.isFetching}
          />
          : null
        }
        {this.state.next && !this.state.isFetching ?
          <Button
            textStyle={{color:'#bcbcbc', fontSize: 16}}
            inlineStyle={localStyles.button}
            title={I18n.t('World.Square.loadMore')}
            onPress={this.fetchNextRoomList}
          />
          : null
         }
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  button: {
    borderRadius: 0,
    padding: 15,
    backgroundColor: 'white'
  }
})
