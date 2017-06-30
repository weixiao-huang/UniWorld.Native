import React from 'react'

import {
  MainView,
  MainText,
} from './style'

const ChatItem = ({
  index, sender, content, type, image, showTime,
}) => (
  <MainView>
    <MainText>
      {content}
    </MainText>
  </MainView>
)

export default ChatItem
