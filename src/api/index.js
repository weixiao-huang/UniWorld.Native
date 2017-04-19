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
  })
}
