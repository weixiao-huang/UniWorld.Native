import React from 'react'

import {
  MainView,
  TimeView,
  TimeText,
  WrapView,
  TitleView,
  TitleImage,
  TitleText,
  ContentView,
  ContentText,
} from './style'

const noticeUrl = require('@/img/icon/info.png')
const questionUrl = require('@/img/icon/fillP.png')

const NoticeItem = ({ item }) => {
  const title = item.title
  const content = item.description
  const isAnnouncement = item.is_announcement
  const time = new Date(item.time)
  return (
    <MainView>
      <TimeView>
        <TimeText fontSize="20px">{time.getMonth() + 1}月</TimeText>
        <TimeText fontSize="14px">{time.getDay()}日</TimeText>
        <TimeText fontSize="10px">
          {time.toTimeString().split(':').splice(0, 2).join(':')}
        </TimeText>
      </TimeView>
      <WrapView>
        <TitleView>
          <TitleImage source={isAnnouncement ? noticeUrl : questionUrl} />
          <TitleText>{title}</TitleText>
        </TitleView>
        <ContentView>
          <ContentText>{content}</ContentText>
        </ContentView>
      </WrapView>
    </MainView>
  )
}

export default NoticeItem
