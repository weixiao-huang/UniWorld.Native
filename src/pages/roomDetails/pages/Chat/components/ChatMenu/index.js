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

const ChatMenu = ({ sendImg }) => (
  <MainView>
    <ItemTouch>
      <ItemImage source={noticeIconImg} />
      <ItemText>{I18n.t('Room.Chat.notice')}</ItemText>
    </ItemTouch>
    <ItemTouch>
      <ItemImage source={questionIconImg} />
      <ItemText>{I18n.t('Room.Chat.questionnaires')}</ItemText>
    </ItemTouch>
    <ItemTouch>
      <ItemImage source={ImageIconImg} />
      <ItemText>{I18n.t('Room.Chat.image')}</ItemText>
    </ItemTouch>
  </MainView>
)

export default ChatMenu
