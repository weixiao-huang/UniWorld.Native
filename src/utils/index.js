import { Alert, ToastAndroid, Platform } from 'react-native'
import shortid from 'shortid'

export const addShortid = objArray => objArray.map(item => ({
  ...item, id: shortid.generate(),
}))

export const toastShort = (content, isAlert) => {
  if (isAlert || Platform.OS === 'ios') {
    Alert.alert(
      'Alert',
      content.toString(),
    )
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.SHORT)
  }
}
