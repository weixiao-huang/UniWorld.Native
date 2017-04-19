/**
 * Created by huangwx on 12/04/2017.
 */

import { server } from '../common/constants'

export default {
  userLogin: data => fetch(`${server}/token/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }),
  fetchUserInfo: token => fetch(`${server}/profile/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }),
  fetchUser: id => token => fetch(`${server}/user/${id}/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }),
  fetchRecommend: token => fetch(`${server}/plaza/hot/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }),
  fetchLatest: token => fetch(`${server}/plaza/latest/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }),
  fetchWorld: token => fetch(`${server}/plaza/random/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }),
  fetchInitialLabels: token => fetch(`${server}/label/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }),
  fetchRoomInfo: id => token => fetch(`${server}/room/${id}/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }),
  fetchRoomList: token => fetch(`${server}/profile/rooms/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }),
  fetchQuestionnaires: id => token => fetch(`${server}/room/${id}/questionnaires/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}`}
  }),
  fetchParticipants: id => token => fetch(`${server}/room/${id}/participants/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}`}
  }),
  fetchResult: resultId => id => token => fetch(`${server}/room/${id}/get_result/${resultId}/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}`}
  }),
  createAnnouncement: roomId => token => fetch(`${server}/room/${roomId}/create_announcement/`, {

  }),
  followUser: userId => token => fetch(`${server}/user/${userId}/follow/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}`}
  }),
  leaveRoom: roomId => token => fetch(`${server}/room/${roomId}/leave/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}`}
  }),
  joinRoom: roomId => token => fetch(`${server}/room/${roomId}/join/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}`}
  }),
  markRoom: roomId => token => fetch(`${server}/room/${roomId}/mark/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}`}
  }),
  unmarkRoom: roomId => token => fetch(`${server}/room/${roomId}/unmark/`, {
    method: 'GET',
    headers: { Authorization: `token ${token}`}
  }),
  /*
    data: {
      cover: url : (dizhi),
      date_time_start: '2017-04-19 22:51',
      date_time_end: '2017-04-22 22:11',
      description: '' : string,
      is_matchroom: false,
      labels: [58, 35],
      location_string: '123123',
      max_participants: null or 12,
      options: "{''}",
      show: true,
      title: '123' : string
    }
   */
  createRoom: data => token => fetch(`${server}/create/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${token}`
    },
    body: JSON.stringify(data)
  }),
  /*
    data: {
      text: reportReason : string
    }
   */
  reportRoom: data => roomId => token => fetch(`${server}/room/${roomId}/report/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${token}`
    },
    body: JSON.stringify(data)
  }),
  /*
    data: {
      id: userId : int,
      text: reportReason : string
    }
   */
  reportUser: data => roomId => token => fetch(`${server}/room/${roomId}/thumb_down/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${token}`
    },
    body: JSON.stringify(data)
  })
}
