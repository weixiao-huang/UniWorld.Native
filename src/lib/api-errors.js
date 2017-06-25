// because Fetch doesn't recognize error responses as
// actual errors since it's technically completing the response...

import Reactotron from 'reactotron-react-native'

export function handleApiErrors(response) {
  if (!response.ok) {
    Reactotron.log(response.statusText)
    console.log('response', response)
    throw new Error(response.status)
  }
  return response
}
