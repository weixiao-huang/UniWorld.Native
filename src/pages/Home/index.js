/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, Alert, View, Text, Modal } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import { MessagePolling, SetCommonData, FetchUnreadRooms, SetRoomMessage, CheckMailbox } from '../../store/actions'
import { wsByToken } from '../../ws'
import * as PushNotification from 'react-native-push-notification'
import SignInfo from '../New'
import World from './World'
import NewRoom from './NewRoom'
import Smile from './Smile'
import RoomList from './RoomList'
import Me from './Me'
import StyleButton from '../../components/StyleButton'

function getUnread() {
  let count = 0
  console.log('123123123123123')
  console.log(state)
  for (let room in state.unreadMessages) {
    count += state.unreadMessages[room]
  }
  console.log(count)
  reutrn(count)
}
export const HomeRouter = TabNavigator({
  World: {
    screen: World,
    navigationOptions: {
      tabBar: {
        label: I18n.t('World.label', { defaultValue: 'World' }),
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        icon: ({ tintColor }) => (
          <Image
            source={require('../../assets/icon/plazaR.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      }
    }
  },
  NewRoom: {
    screen: NewRoom,
    navigationOptions: {
      tabBar: {
        label: I18n.t('NewRoom.label', { defaultValue: 'New Room' }),
        icon: ({ tintColor }) => (
          <Image
            source={require('../../assets/icon/newR.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      },
    }
  },
  RoomList: {
    screen: RoomList,
    navigationOptions: {
      tabBar: {
        label: I18n.t('RoomList.label', { defaultValue: 'List' }),
        icon: ({ tintColor }) => {
          return <View>
            {global.unread ? <View style={[localStyles.messagesItem]}>
              <Text style={[localStyles.messagesText]}>{global.unread}</Text>
            </View> : null}
            <Image
              source={require('../../assets/icon/myRoomR.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          </View>
        },
      },
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBar: {
        label: I18n.t('Me.label', { defaultValue: 'Me' }),
        icon: ({ tintColor }) => (
          <Image
            source={require('../../assets/icon/myInfoR.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      },
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: '#ffffff', // 文字和图片选中颜色
      inactiveTintColor: '#EC5367', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
      style: {
        backgroundColor: '#3e3974', // TabBar 背景色
      },
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    },
  })

const mapStateToProps = state => ({
  isPolling: state.common.isPolling,
  token: state.auth.token,
  loginDialog: state.common.loginDialog,
  showLoginDialog: state.common.showLoginDialog,
  pmid: state.user.pmid,
  unreadMessages: state.user.unreadMessages
})

@connect(mapStateToProps, dispatch => ({ dispatch }))
export default class Home extends Component {
  constructor(props) {
    super(props)
    let count = 0
    for (let room in this.props.unreadMessages) {
      count += this.props.unreadMessages[room]
    }
    global.unread = count


  }
  _messagePolling = async () => {
    // console.log('_messagePolling::isPolling: ', this.props.isPolling)
    // console.log('_messagePolling::token: ', this.props.token)
    // console.log(this.props.token && this.props.isPolling)
    /*
    if (this.props.token && this.props.isPolling) {
      try {
        console.log('开始轮训')
        // console.log('_messagePolling::isPolling: ', this.props.isPolling)
        // console.log('_messagePolling::token: ', this.props.token)
        await this.props.dispatch(MessagePolling)
        // await this.props.dispatch(FetchUnreadRooms)
        console.log('即将开始下一轮轮训')
        setTimeout(this._messagePolling, 1000)
        // this._messagePolling()
      } catch (err) {
        Alert.alert('消息轮训错误', err)
        console.log(err)
        setTimeout(this._messagePolling, 1000)
        // this._messagePolling()
      }
    }*/
    global.ws = new WebSocket('wss://api.theuniworld.net/ws/?token=' + this.props.token)
    global.ws.onopen = () => {
      //check mailbox
      this.props.dispatch(CheckMailbox(this.props.pmid))
    }
    global.ws.onmessage = (message) => {
      console.log('sssssssssssssss')
      this.props.dispatch(SetRoomMessage(message))
      if (global.unread < 99) {
        let count = 0
        for (let room in this.props.unreadMessages) {
          count += this.props.unreadMessages[room]
        }
        global.unread = count
      }
    }
  }
  componentWillMount() {
    this.setState({
      renew: true,
    })
  }
  async componentDidMount() {
    await this.props.dispatch(SetCommonData('isPolling', true))
    console.log('ws开启', this.props.isPolling)
    if (this.props.token) this._messagePolling()
  }
  componentWillReceiveProps(nextProps) {
    // console.log('是否WillReceiveProps轮训？？？？', nextProps.isPolling)
    // console.log(nextProps)
    //if (this.props.token) this._messagePolling()
  }
  componentWillUnmount() {
    this.setState({ isPolling: false })
  }
  render() {
    return (
      <View style={styles.flex1}>
        <HomeRouter
          props={this.props}
        />
      </View>
    )
  }
}

const localStyles = {
  messagesText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  messagesItem: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEAC4E',
    left: 22,
    top: -4,
    width: 21,
    height: 21,
    borderRadius: 10,
  }
}
