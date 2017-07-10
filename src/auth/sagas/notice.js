import {
  take, cancel, put, cancelled, select,
} from 'redux-saga/effects'

import { NavigateToRoomDetails } from '@/router/actions'
import api from '@/api'
import { handleApiErrors } from '@/lib/api-errors'

import PushNotification from 'react-native-push-notification'
import { eventChannel } from 'redux-saga'

import {
  GET_DEVICE_TOKEN,
  GET_ROOM_ID,
} from './types'

import {
  SET_DEVICE_TOKEN,
} from '../types'

const noticeChannel = token => eventChannel((emit) => {
  console.log('config push notification')
  PushNotification.configure({
    onRegister(deviceToken) {
      console.log('TOKEN:', deviceToken);
      emit({
        type: GET_DEVICE_TOKEN,
        deviceToken,
      })
      if (token) {
        api.postDeviceToken(deviceToken.token)(token)
          .then(handleApiErrors)
          .then(res => console.log('device token res: ', res))
      }
    },
    onNotification(notification) {
      console.log('notification', notification)
      const roomId = (notification.data &&
                      notification.data.roomId) ||
                    (notification.userInfo &&
                      notification.userInfo.roomId) ||
                    notification.id
      console.log('Notification RoomId:', roomId)
      if (!notification.foreground) {
        emit({
          type: GET_ROOM_ID,
          roomId,
        })
      }
      // const store = configureStore(() => { })
      // store.dispatch(GoToRoomInfo(Number(notification.data.roomId || notification.id)))
      // GoToRoomInfo(notification.roomId)()
    //   AppNavigator.router.getStateForAction(NavigationActions.navigate({
    //       routeName: 'RoomDetail',
    //       params: { id: Number(notification.data.roomId || notification.id)}
    //     }))
    },

    // ANDROID ONLY: GCM Sender ID
    // (optional - not required for local notifications,
    // but is need to receive remote push notifications)
    senderID: 'YOUR GCM SENDER ID',

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
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
  })

  return () => console.log('push notification channel off')
})


export default function* noticeFlow() {
  const { auth: { token } } = yield select()
  const channel = noticeChannel(token)
  while (true) {
    try {
      const { type, roomId, deviceToken } = yield take(channel)
      if (type === GET_ROOM_ID) {
        yield put(NavigateToRoomDetails(roomId))
      } else if (type === GET_DEVICE_TOKEN) {
        yield put({
          type: SET_DEVICE_TOKEN,
          deviceToken,
        })
      }
    } catch (error) {
      console.log('notification channel error: ', error)
    } finally {
      if (yield cancelled()) channel.close()
    }
  }
}
