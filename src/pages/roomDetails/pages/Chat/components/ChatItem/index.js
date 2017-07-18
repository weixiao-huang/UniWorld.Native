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
  ContentTouch,
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
        <ContentTouch
          onLongPress={() => console.log('long press')}
          reverse={mine}
          activeOpacity={1}
        >
          {!mine && <TitleView>
            <TitleText>{sender.name}</TitleText>
          </TitleView>}
          <ContentView reverse={mine} >
            {mine && sending && <ActivityIndicator
              style={{ marginRight: 10 }}
              animating={mine && sending}
            />}
            {type ?
              <ContentTextView reverse={mine}>
                <ContentImage source={{ uri: image }} />
              </ContentTextView> :
              <ContentTextView reverse={mine}>
                <ContentText>{content}</ContentText>
              </ContentTextView>
            }
          </ContentView>
        </ContentTouch>
      </WrapView>
    }
  </MainView>
)

export default ChatItem
