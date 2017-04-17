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
  getUserInfo: token => fetch(`${server}/profile/`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }),
  getRecommend: token => fetch(`${server}/plaza/hot/`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }),
  getLatest: token => fetch(`${server}/plaza/latest/`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }),
  getWorld: token => fetch(`${server}/plaza/random/`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }),
  getInitialLabels: token => fetch(`${server}/label/`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }),
  getRoomInfo: id => token => {
    return fetch(`${server}/room/${id}/`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
  },
  getRoomList: token => {
    return fetch(`${server}/profile/rooms/`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
  }
}
