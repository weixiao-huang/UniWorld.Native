/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  RefreshControl,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import api from '../../../api'
import styles from '../../../common/styles'
import { connect } from 'react-redux'
import { FetchRoomList } from '../../../store/actions'
import { server } from '../../../common/constants'
import I18n from 'react-native-i18n'

import RoomWrap from '../../../components/RoomWrap'

@connect(state => ({token: state.auth.token}), dispatch => ({dispatch}))
export default class TabContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      isFetching: false,
      history: [],
      next: `${server}/profile/${this.props.name}_history/`
    }
  }
  static propTypes = {
    roomList: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  }
  static defaultProps = {
    title: ''
  }
  _onRefresh = async () => {
    this.setState({refreshing: true, history: null})
    await this.props.dispatch(FetchRoomList)
    this.setState({refreshing: false})
  }

  _showHistory = async () => {
    this.setState({isFetching: true})
    try {
      const res = await api.fetchDataFromUrl(this.state.next)(this.props.token)
      console.log(res)
      if (res.status === 200) {
        const history = await res.json()
        this.setState({history: this.state.history.concat(history.results), next: history.next})
      }
    } catch (e) {
      console.log(e)
    }
    this.setState({isFetching: false})
  }
  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        style={[localStyles.container]}
      >
        {this.props.roomList && (this.props.roomList.length>0 || this.state.history.length) > 0 ?
          <RoomWrap title={this.props.title} roomList={this.props.roomList}/> :
          <View style={[styles.flexCenter]}>
            <Image
              style={[localStyles.empty]}
              source={require('../../../assets/emptyList.png')}
            />
          </View>
        }
        {this.state.history && this.state.history.length > 0 &&
          <RoomWrap roomList={this.state.history} />
        }
        {this.state.isFetching ?
          <ActivityIndicator
            style={{ height: 40 }}
            animating={this.state.isFetching}
          /> :
          this.state.next && <TouchableOpacity>
            <Text
              style={[localStyles.historyRecord]}
              onPress={this._showHistory}
            >
              {I18n.t('RoomList.history')}
            </Text>
          </TouchableOpacity>
        }
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  historyRecord: {
    textAlign: 'center',
    color: '#aaa',
    padding: 10
  },
  empty: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
