import I18n, { getLanguages } from 'react-native-i18n'
import en from './en.json'
import zh from './zh.json'

I18n.fallbacks = true;

I18n.translations = {
  zh,
  en,
}

getLanguages().then((lang) => { I18n.locale = lang[0] })

export default I18n
