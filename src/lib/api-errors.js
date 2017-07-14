// because Fetch doesn't recognize error responses as
// actual errors since it's technically completing the response...

import Reactotron from 'reactotron-react-native'

export const handleApiErrors = (response) => {
  if (!response.ok) {
    Reactotron.log(response.statusText)
    console.log('response', response)
    if (response.status === 401) {
      // 登录过期
    }
    throw new Error(response.status)
  }
  return response
}
