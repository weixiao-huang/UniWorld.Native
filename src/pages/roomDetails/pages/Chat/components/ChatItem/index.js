import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Avatar from '@/components/Avatar'
import {
  MainView,
  WrapView,
  NoticeText,
  TriangleView,
  ContentView,
  TitleView,
  TitleText,
  ContentImage,
  ContentText,
  ContentTextView,
} from './style'

const AvatarSize = 42

const ChatItem = ({
  index, sender, content, type, image, showTime, mine,
}) => (
  <MainView>
    {type === 2 ?
      <NoticeText>{content}</NoticeText> :
      <WrapView reverse={mine} >
        <Avatar
          id={sender.id}
          avatar={sender.avatar}
          size={AvatarSize}
        />
        <TriangleView reverse={mine} />
        <ContentView reverse={mine} >
          {!mine && <TitleView>
            <TitleText>{sender.name}</TitleText>
          </TitleView>}
          <ContentView reverse={mine} >
            {type ?
              <ContentTextView reverse={mine}>
                <ContentImage source={{ uri: image }} />
              </ContentTextView> :
              <ContentTextView reverse={mine}>
                <ContentText>{content}</ContentText>
              </ContentTextView>
            }
          </ContentView>
        </ContentView>
      </WrapView>
    }
  </MainView>
)

export default ChatItem
