import PushNotification from 'react-native-push-notification'
import { eventChannel } from 'redux-saga'

export default () => eventChannel((emit) => {
  PushNotification.configure({
    onRegister(token) {
      console.log('TOKEN:', token);
    },
    onNotification(notification) {
      console.log('notification', notification)
      const roomId = (notification.data &&
                      notification.data.roomId) ||
                     (notification.userInfo &&
                      notification.userInfo.roomId) ||
                     notification.id
      console.log('roomId222222:', roomId)
      if (!notification.foreground) emit(roomId)
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
