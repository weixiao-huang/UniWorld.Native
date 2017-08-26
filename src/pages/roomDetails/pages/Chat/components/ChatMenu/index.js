import React from 'react'
import I18n from '@/locales'

import noticeIconImg from '@/img/icon/trumpet.png'
import questionIconImg from '@/img/icon/fill.png'
import ImageIconImg from '@/img/icon/album.png'

import {
  MainView,
  ItemTouch,
  ItemImage,
  ItemText,
} from './style'

const ChatMenu = ({ sendImg, toNotice }) => (
  <MainView>
    <ItemTouch onPress={sendImg}>
      <ItemImage source={ImageIconImg} />
      <ItemText>{I18n.t('Room.Chat.image')}</ItemText>
    </ItemTouch>
    <ItemTouch onPress={toNotice}>
      <ItemImage source={noticeIconImg} />
      <ItemText>{I18n.t('Room.Chat.notice')}</ItemText>
    </ItemTouch>
    <ItemTouch onPress={toNotice}>
      <ItemImage source={questionIconImg} />
      <ItemText>{I18n.t('Room.Chat.questionnaires')}</ItemText>
    </ItemTouch>
  </MainView>
)

export default ChatMenu
