/**
 * Created by huangwx on 19/04/2017.
 */

import { Alert } from 'react-native'

export const actionHandle = func => {
  try {
    return func()
  } catch (err) {
    console.log(err)
    Alert.alert('', err.message)
  }
}
export const statusCodeHandle = (res, successStatusCode=200) => async func => {
  if (res.status === successStatusCode) return func(await res.json())
  else throw { message: res }
}
export const tokenRequestHandle = api => getState => api(getState().auth.token)

export const composeHandle = apiFunc => (type, stateName) => (dispatch, getState) => (
  actionHandle(async () => (
    statusCodeHandle
    (await tokenRequestHandle(apiFunc)(getState))
    (async data => dispatch({type, [stateName]: data}))
  ))
)
