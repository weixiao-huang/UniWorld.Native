import PushNotification from 'react-native-push-notification'

PushNotification.configure({

  onRegister(token) {
    console.log('TOKEN:', token);
  },
  onNotification(notification) {
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

export default PushNotification
