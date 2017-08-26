import PushNotification from 'react-native-push-notification'

import {
  CLIENT_SET,
  CLIENT_UNSET,
  SET_INITIAL_LABELS,
  SET_ALERT,
  SET_ROOM_MESSAGE,
  RESET_UNREAD_MESSAGE,
  SET_ALERT_MESSAGE,
  SET_DEVICE_TOKEN,
  SET_SOCKET_CONNECT_STATUS,
  SET_SOCKET_RECONNECT,
  SET_SEND_MESSAGE,
  SET_MESSAGE_FAILED,
} from './types'

const initialState = {
  // id: null,
  token: null,
  initialLabels: null,
  alert: false,
  messages: {},
  sendingPool: {},
  pmid: 0,
  unreadMessages: {},
  wx: null,
  deviceToken: null,
  socketConnectStatus: false,
  socketReconnect: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_SET:
      return {
        ...state,
        token: action.token,
      }
    case CLIENT_UNSET:
      return {
        ...state,
        token: null,
      }
    case SET_SOCKET_CONNECT_STATUS:
      return {
        ...state,
        socketConnectStatus: action.socketConnectStatus,
      }
    case SET_SOCKET_RECONNECT:
      return {
        ...state,
        socketReconnect: action.socketReconnect,
      }
    case SET_DEVICE_TOKEN:
      return {
        ...state,
        deviceToken: action.deviceToken,
      }
    case SET_INITIAL_LABELS:
      return {
        ...state,
        initialLabels: action.initialLabels,
      }
    case SET_ALERT:
      return {
        ...state,
        alert: action.alert,
      }
    case RESET_UNREAD_MESSAGE: {
      const unreadMessages = {
        ...state.unreadMessages,
        [action.id]: 0,
      }
      PushNotification.setApplicationIconBadgeNumber(
        Object.values(unreadMessages).reduce((a, b) => a + b),
      )
      return {
        ...state,
        unreadMessages,
      }
    }
    case SET_MESSAGE_FAILED: {
      const failedMessages = action.failedMessages
      const messages = { ...state.messages }
      failedMessages.map((item) => {
        const { roomId, index } = item
        messages[roomId][index].failed = true
        return item
      })
      return {
        ...state,
        messages,
      }
    }
    case SET_SEND_MESSAGE: {
      const message = {
        ...action.message,
        sending: true,
        failed: false,
      }
      const { local_id, room: roomId, time } = message
      const messages = { ...state.messages }
      let index = 0

      if (messages[roomId] !== undefined) {
        index = messages[roomId].length
        messages[roomId] = messages[roomId].concat(message)
      } else messages[roomId] = [message]
      const sendingPool = {
        ...state.sendingPool,
        [local_id]: { roomId, index, time },
      }
      return {
        ...state,
        messages,
        sendingPool,
      }
    }
    case SET_ROOM_MESSAGE: {
      const messages = { ...state.messages }
      const unreadMessages = { ...state.unreadMessages }
      const sendingPool = { ...state.sendingPool }
      const data = action.message
      const pmid = data.id || state.pmid
      console.log('data.id: ', data.id)
      console.log('state.pmid: ', state.pmid)
      console.log('pmid: ', pmid)
      const roomId = data.room
      const showRoomId = action.id

      if (unreadMessages[roomId] !== undefined) {
        if (showRoomId !== roomId) {
          unreadMessages[roomId] += 1
        }
      } else unreadMessages[roomId] = 1

      let time
      let prevId
      if (data.local_id && sendingPool[data.local_id]) {
        const { roomId: id, index } = sendingPool[data.local_id]
        messages[id][index] = {
          ...messages[id][index],
          time: data.time,
          sending: false,
        }
        delete sendingPool[data.local_id]
        prevId = index
      } else if (state.messages[roomId] !== undefined) {
        prevId = messages[roomId].length
        messages[roomId] = state.messages[roomId].concat(data)
      } else {
        prevId = 0
        messages[roomId] = [data]
      }

      const currentId = prevId
      while (!time) {
        prevId -= 1
        if (prevId < 0) break
        time = messages[roomId][prevId].time
      }
      const delta = time && new Date(data.time) - new Date(time)
      if (!delta || (delta && delta > 480000)) {
        messages[roomId][currentId].showTime = true
      }
      const unreadArray = Object.values(unreadMessages)
      const unread = unreadArray.length > 0 ?
        unreadArray.reduce((a, b) => a + b) : 0
      PushNotification.setApplicationIconBadgeNumber(unread)
      return {
        ...state,
        messages,
        unreadMessages,
        pmid,
        sendingPool,
      }
    }
    case SET_ALERT_MESSAGE:
      return {
        ...state,
        messages: action.messages,
      }
    default:
      return state
  }
}
