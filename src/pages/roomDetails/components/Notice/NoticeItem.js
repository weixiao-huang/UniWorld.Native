import React from 'react'
import styled from 'styled-components/native'

const MainView = styled.View`
  background-color:white;
  margin: 10px;
  marginTop: 20px;
  marginRight: 20px;
  alignItems: flex-start;
  flex-direction: row;
`

const TimeView = styled.View`
  paddingLeft: 10px;
  paddingRight: 10px;
  paddingTop:10px;
`

const TimeText = styled.Text`
`

const WrapView = styled.View`
  borderRadius: 10px;
`

const TitleView = styled.View`
  borderBottomColor: #eeeeee;
  borderBottomWidth: 1px;
  alignItems: center;
  padding: 5px;
  paddingBottom: 10px;
  margin: 10px
  flex-direction: row;
  width: 260px;
`

const TitleImage = styled.Image`
  width: 20px;
  height: 20px;
  marginRight: 10px;

`
const TitleText = styled.Text`
  fontSize: 18px;
  fontWeight: bold;
`
const ContentView = styled.View`
  padding: 10px;
  paddingTop: 2px;
  margin: 5px;
  marginTop: 0;
`
const ContentText = styled.Text`
  lineHeight: 20px;
`
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
        <TimeText style={{ fontSize: 20 }}>{time.getMonth() + 1}月</TimeText>
        <TimeText style={{ fontSize: 14 }}>{time.getDay()}日</TimeText>
        <TimeText style={{ fontSize: 10 }}>{time.toTimeString().split(':').splice(0, 2).join(':')}</TimeText>
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
