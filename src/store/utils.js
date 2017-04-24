/**
 * Created by huangwx on 19/04/2017.
 */

import { Alert } from 'react-native'

export const actionHandle = async func => {
  try {
    return await func()
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}

// func should return a Promise object
export const statusCodeHandle = (res, successStatusCode=200) => func => {
  if (res.status === successStatusCode)
    return res.json()
      .then(data => func(data))
      .catch(err => {throw err})
  else throw { message: 'Status Code Error' }
}

// return a Promise object
// api should return a Promise object
export const tokenRequestHandle = apiFunc => getState => apiFunc(getState().auth.token)

export const composeHandle = apiFunc => (type, stateName) => (dispatch, getState) => (
  actionHandle(() => (
    tokenRequestHandle(apiFunc)(getState).then(res =>
      statusCodeHandle(res)(data => dispatch({type, [stateName]: data}))
    ).catch(err => {throw err})
  ))
)
