import React from 'react'
import { StyleSheet } from 'react-native'
import Avatar from '@/components/Avatar'
import {
  MainView,
  MainText,
  WrapView,
  TriangleView,
  ContentView,
  TitleView,
  TitleText,
  ContentImage,
  ContentText,
} from './style'

const styles = StyleSheet.create({
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  triangleReverse: {
    transform: [{ rotate: '90deg' }],
    borderBottomColor: '#d5d9f0',
    marginTop: 0,
    marginRight: 5,
  },
  contentReverse: {
    justifyContent: 'flex-end',
    marginRight: -3,
  },
  contentMine: {
    backgroundColor: '#d5d9f0',
  },
})

const AvatarSize = 42

const ChatItem = ({
  index, sender, content, type, image, showTime, mine,
}) => (
  <MainView>
    <WrapView>
      <Avatar id={sender.id} avatar={sender.avatar} size={AvatarSize} />
      <TriangleView style={mine ? styles.triangleReverse : null} />
      <ContentView style={mine ? styles.contentReverse : null} >
        {!mine && <TitleView>
          <TitleText>{sender.name}</TitleText>
        </TitleView>}
        <ContentView style={mine ? styles.contentMine : null} >
          {type ?
            <ContentImage source={{ uri: image }} /> :
            <ContentText>{content}</ContentText>
          }
        </ContentView>
      </ContentView>
    </WrapView>
  </MainView>
)

export default ChatItem
