import React from 'react'
import styled from 'styled-components/native'
import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import I18n from 'react-native-i18n'

const MainView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  flex-direction: row;

`
const InfoView = styled.View`
  width: 60%;
  padding: 20px;
  align-items: center
  flex-direction: row;
`
const NameView = styled.View`
  padding-left: 15px;
`
const NameText = styled.Text`
  font-size: 20px;
  margin-bottom: 14px;
  font-weight:bold;
`
const SignText = styled.Text`
  fontSize: 14px;
  color: #808080;
`
const FollowButton = styled(Button)`
  width: 90px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #ec5367;
  border-radius: 10px;
  margin-right: 15px;
`
const FollowTextStyle = `
  font-size:18;
  font-weight:500;
`
const Host = ({ host, myId, isFollowed }) => (
  <MainView>
    <InfoView>
      <Avatar id={host.id} avatar={host.avatar} />
      <NameView>
        <NameText>{host.name}</NameText>
        <SignText>{host.signature}</SignText>
      </NameView>
    </InfoView>
    {host.id === myId ? null :
    <FollowButton
      textStyle={FollowTextStyle}
      title={isFollowed ? I18n.t('Room.unfollow') : I18n.t('Room.follow')}
      onPress={isFollowed ? null : null}
    />
    }
  </MainView>
)

export default Host
