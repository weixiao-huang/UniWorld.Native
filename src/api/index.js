/**
 * Created by huangwx on 12/04/2017.
 */

import { server } from '../common/constants'
import { AsyncStorage } from 'react-native'

export default {
  userLogin: data => {
    return fetch(`${server}/token/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  },
  getUserInfo: token => {
    console.log()
    return fetch(`${server}/profile/`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
  },
  getRoomList: () => {
    // return fetch(`${server}/plaza/hot`)
  }
}
