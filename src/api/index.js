/**
 * Created by huangwx on 12/04/2017.
 */

import { server } from '../common/constants'

export default {
  userLogin: data => {
    console.log(JSON.stringify(data))
    return fetch(`${server}/token/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  },
  getRoomList: () => {
    // return fetch(`${server}/plaza/hot`)
  }
}
