import React from 'react'
import { ActivityIndicator } from 'react-native'
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
  BubbleWrapView,
  ContentText,
  ContentTextView,
} from './style'

const AvatarSize = 42

const ChatItem = ({
  index, sender, content, type, image, showTime, mine, sending,
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
        <ActivityIndicator
          style={{ marginRight: 10 }}
          animating={Boolean(mine && sending)}
        />
      </WrapView>
    }
  </MainView>
)

export default ChatItem
