/**
 * Created by huangwx on 13/04/2017.
 */


import * as PushNotification from 'react-native-push-notification'
import * as types from '../types'
import { GoToRoomInfo, GoToRoomDetail } from '../actions'
import configureStore from '../index'

PushNotification.configure({

  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    const store = configureStore(() => {})
    console.log(global.navigateId)
    store.dispatch(GoToRoomDetail(global.navigateId))
    // GoToRoomInfo(notification.roomId)()
  },

  // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "YOUR GCM SENDER ID",

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
    * (optional) default: true
    * - Specified if permissions (ios) and token (android and ios) will requested or not,
    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    */
  requestPermissions: true,
});

const initialState = {
  userInfo: null,
  user: {},
  dislikes: [],
  messages: {},
  isEditing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case types.SET_EDIT_STATUS:
      return {
        ...state,
        isEditing: action.isEditing
      }
    case types.GET_USER:
      return {
        ...state,
        user: action.user
      }
    case types.SET_USER_DISLIKES:
      return {
        ...state,
        dislikes: action.dislikes
      }
    case types.EDIT_USER_INFO:
      console.log('EDIT_USER_INFO: ', action.userInfo)
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.userInfo
        }
      }
    case types.SEND_MESSAGE:
      let message = {}
      console.log('继续测试：', action.roomId, action.message)
      if (state.messages.hasOwnProperty(action.roomId)) {
        message[action.roomId] = state.messages[action.roomId].concat([action.message])
      } else {
        message[action.roomId] = [action.message]
      }
      // message[action.roomId] = [action.message].concat(state.messages[action.roomId])
      console.log('再测试：', message)
      return {
        ...state,
        messages: {
          ...state.messages,
          ...message
        }
      }
    case types.SET_ROOM_MESSAGES:
      let messages = {}
      let navigateId
      for (let roomId in action.messages) {
        if (state.messages.hasOwnProperty(roomId)) {
          // messages[roomId] = action.messages[roomId].reverse().concat(state.messages[roomId])
          messages[roomId] = state.messages[roomId].concat(action.messages[roomId])
          navigateId = roomId
        } else {
          messages[roomId] = action.messages[roomId]
          navigateId = roomId
          // messages[roomId] = action.messages[roomId].reverse()
        }
        PushNotification.localNotification({

          /* Android Only Properties
          id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
          ticker: "My Notification Ticker", // (optional)
          autoCancel: true, // (optional) default: true
          largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
          smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
          bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
          subText: "This is a subText", // (optional) default: none
          color: "red", // (optional) default: system default
          vibrate: true, // (optional) default: true
          vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
          tag: 'some_tag', // (optional) add tag to message
          group: "group", // (optional) add group to message
          ongoing: false, // (optional) set whether this is an "ongoing" notification

          /* iOS only properties*/
          //alertAction: // (optional) default: view
          //category: // (optional) default: null
          //userInfo: // (optional) default: null (object containing additional notification data)

          /* iOS and Android properties */
          title: "新消息", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
          message: action.messages[roomId][action.messages[roomId].length-1].sender.name+'：'+action.messages[roomId][action.messages[roomId].length-1].text, // (required)
          //playSound: true, // (optional) default: true
          soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
          //number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
          repeatType: 'day', // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
          //actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more

        });
      }
      global.navigateId = Number(navigateId)
      return {
        ...state,
        messages: {
          ...state.messages,
          ...messages
        },
      }
    case types.USER_LOGOUT:
      return initialState
    default:
      return state
  }
}
