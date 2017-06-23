import React from 'react'
import { StyleSheet } from 'react-native'
import Avatar from '@/components/Avatar'
import I18n from 'react-native-i18n'

import {
  MainView,
  InfoView,
  NameView,
  NameText,
  SignText,
  FollowButton,
} from './style'

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
})

const Host = ({ host, myId, isFollowed }) => (
  <MainView>
    <InfoView>
      <Avatar id={host.id} avatar={host.avatar} />
      <NameView>
        <NameText>{host.name}</NameText>
        <SignText>{host.signature}</SignText>
      </NameView>
    </InfoView>
    {host.id !== myId && <FollowButton
      textStyle={styles.text}
      title={isFollowed ? I18n.t('Room.unfollow') : I18n.t('Room.follow')}
      onPress={isFollowed ? null : null}
    />}
  </MainView>
)

export default Host
