import React from 'react'
import { StyleSheet } from 'react-native'
import Avatar from '@/components/Avatar'
import I18n from 'react-native-i18n'
import styled from 'styled-components/native'
import Button from '@/components/Button'

export const MainView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  flex-direction: row;

`
export const InfoView = styled.View`
  width: 60%;
  padding: 20px;
  align-items: center
  flex-direction: row;
`
export const NameView = styled.View`
  padding-left: 15px;
`
export const NameText = styled.Text`
  font-size: 20px;
  margin-bottom: 14px;
  font-weight:bold;
`
export const SignText = styled.Text`
  fontSize: 14px;
  color: #808080;
`
export const FollowButton = styled(Button)`
  width: 116px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #ec5367;
  border-radius: 10px;
  margin-right: 15px;
`

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
})

const Host = ({
  host, myId, follow, unfollow, hostFollowed,
}) => (
  <MainView>
    <InfoView>
      <Avatar id={host.id} avatar={host.avatar} />
      <NameView>
        <NameText>{host.name}</NameText>
        <SignText>{host.signature}</SignText>
      </NameView>
    </InfoView>
    {!!myId && host.id !== myId && <FollowButton
      textStyle={styles.text}
      title={hostFollowed ? I18n.t('Room.unfollow') : I18n.t('Room.follow')}
      onPress={hostFollowed ? unfollow : follow}
    />}
  </MainView>
)

export default Host
