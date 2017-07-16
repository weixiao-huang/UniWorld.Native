// because Fetch doesn't recognize error responses as
// actual errors since it's technically completing the response...

import Reactotron from 'reactotron-react-native'
import { Alert } from 'react-native'
import I18n from '@/locales'
// import { logout } from '@/pages/login/sagas'

export function handleApiErrors(response) {
  if (!response.ok) {
    Reactotron.log(response.statusText)
    console.log('response', response)
    if (response.status === 401) {
      console.log('expire')
      Alert.alert(
        I18n.t('Alert.tips'),
        I18n.t('Alert.tokenExpired'),
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      )
    }
    throw new Error(response.status)
  }
  return response
}
