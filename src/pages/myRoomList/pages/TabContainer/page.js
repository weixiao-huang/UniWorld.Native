/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import {
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import api, { server } from '@/api'
// import I18n from 'react-native-i18n'

import RoomWrap from '@/components/RoomWrap'

import emptyImg from '@/img/emptyList.png'

import {
  MainScrollView,
  EmptyImageView,
  EmptyImage,
  HistoryText,
} from './style'

export default class TabContainer extends Component {
  static propTypes = {
    roomList: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
      history: [],
      next: `${server}/profile/${this.props.name}_history/`,
    }
  }

  onRefresh = () => {
    this.setState({
      history: [],
      next: `${server}/profile/${this.props.name}_history/`,
    })
    this.props.fetchAction()
  }

  showHistory = async () => {
    this.setState({ isFetching: true })
    try {
      const res = await api.fetchDataFromUrl(this.state.next)(this.props.token)
      console.log(res)
      if (res.status === 200) {
        const history = await res.json()
        this.setState({
          history: this.state.history.concat(history.results),
          next: history.next,
        })
      }
    } catch (e) {
      console.log(e)
    }
    this.setState({ isFetching: false })
  }

  render() {
    const { roomList, refreshing } = this.props
    return (
      <MainScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        {roomList && (
          (roomList.length > 0 ||
           this.state.history.length > 0) ?
             <RoomWrap
               title={this.props.title}
               roomList={roomList}
               Chat="1"
             /> :
             <EmptyImageView>
               <EmptyImage source={emptyImg} />
             </EmptyImageView>)}
        {this.state.history &&
         this.state.history.length > 0 &&
         <RoomWrap
           roomList={this.state.history}
           Chat="1"
         />
        }
        {this.state.isFetching ?
          <ActivityIndicator
            style={{ height: 40 }}
            animating={this.state.isFetching}
          /> :
          (this.state.next &&
            <TouchableOpacity>
              <HistoryText onPress={this.showHistory}>
                history
              </HistoryText>
            </TouchableOpacity>)
        }
      </MainScrollView>
    )
  }
}
