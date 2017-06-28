import I18n from 'react-native-i18n'
import en from './en.json'
import zh from './zh.json'

I18n.fallbacks = true;

I18n.translations = {
  zh,
  en,
}

I18n.locale = 'en'

export default I18n
