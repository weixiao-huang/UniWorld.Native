/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, Alert, View, Text, Modal } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import { MessagePolling, SetCommonData } from '../../store/actions'

import World from './World'
import NewRoom from './NewRoom'
import Smile from './Smile'
import RoomList from './RoomList'
import Me from './Me'

import PopupDialog, { SlideAnimation, DialogTitle, DialogButton } from 'react-native-popup-dialog'
import StyleButton from '../../components/StyleButton'

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
        icon: ({ tintColor }) => (
          <View>
            <View style={[localStyles.messagesItem]}>
            <Text style={[localStyles.messagesText]}>1</Text>
            </View>
            <Image
              source={require('../../assets/icon/myRoomR.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          </View>
        ),
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
  showLoginDialog: state.common.showLoginDialog
})

@connect(mapStateToProps, dispatch => ({ dispatch }))
export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.props.dispatch(SetCommonData('isPolling'), true)
  // }
  _messagePolling = async () => {
    // console.log('_messagePolling::isPolling: ', this.props.isPolling)
    // console.log('_messagePolling::token: ', this.props.token)
    // console.log(this.props.token && this.props.isPolling)
    if (this.props.token && this.props.isPolling) {
      try {
        console.log('开始轮训')
        // console.log('_messagePolling::isPolling: ', this.props.isPolling)
        // console.log('_messagePolling::token: ', this.props.token)
        await this.props.dispatch(MessagePolling)
        console.log('即将开始下一轮轮训')
        setTimeout(this._messagePolling, 1000)
        // this._messagePolling()
      } catch (err) {
        Alert.alert('消息轮训错误', err)
        console.log(err)
        setTimeout(this._messagePolling, 1000)
        // this._messagePolling()
      }
    }
  }
  componentWillMount() {
    // console.log(this.props.common)
    this.props.dispatch(SetCommonData('isPolling', true))
    // console.log(this.props.common)
  }
  componentDidMount() {
    // console.log('是否DidMount轮训？？？？', this.props.isPolling)
    if (this.props.token) this._messagePolling()
  }
  componentWillReceiveProps(nextProps) {
    // console.log('是否WillReceiveProps轮训？？？？', nextProps.isPolling)
    // console.log(nextProps)
    if (this.props.token) this._messagePolling()
  }
  componentWillUnmount() {
    this.setState({ isPolling: false })
  }
  render() {
    console.log(this.props.navigation)
    return (
      <View style={styles.flex1}>
        <HomeRouter />
        <PopupDialog
          dialogTitle={<DialogTitle title="请登录" />}
          actions={[
            <DialogButton text="登录" />
          ]}
          dialogAnimation={
            new SlideAnimation({ slideFrom: 'bottom' })
          }
          show={this.props.showLoginDialog}
          onDismissed={() => {
            console.log(this.props.navigation)
            this.props.navigation.goBack()
          }}
        >
          <Image style={{width: '100%', height: 160, resizeMode: 'contain'}} source={require("../../assets/customCreate.png")}/>
        </PopupDialog>
      </View>
    )
  }
}

const localStyles = {
  messagesText: {
    fontSize: 12,
    color: 'white',
    textAlign:'center',
  },
  messagesItem:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FEAC4E',
    left:22,
    top:-4,
    width:18,
    height:18,
    borderRadius:9,
  }
}
