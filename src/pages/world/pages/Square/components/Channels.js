/*
  Components: Channels
*/
import React from 'react'
import styled from 'styled-components/native'

/*
  styles
*/
const MainView = styled.View`
  flexDirection: row;
  paddingTop: 15px;
  justifyContent: space-around;
  paddingBottom: 10px;
  borderBottomColor: #E7E7EB;
  borderBottomWidth: 1px;
`

const ChannelItem = styled.TouchableOpacity`
  flexDirection: column;
  alignItems: center;
  width: 90px;
`

const ChannelIcon = styled.Image`
  width: 49px;
  height: 49px;
  borderRadius: 24.5px;
`

const ChannelText = styled.Text`
  fontSize: 13px;
  paddingTop: 9px;
`

/*
  page
*/
export default ({ navigate, channels }) => (
  <MainView>
    {channels && channels.map(channel => (
      <ChannelItem
        key={channel.id}
        onPress={() => navigate(channel.id)}
      >
        <ChannelIcon source={{ url: channel.icon }} />
        <ChannelText>{channel.title}</ChannelText>
      </ChannelItem>
    ))}
  </MainView>
)
