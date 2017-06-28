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
    {myId && host.id !== myId && <FollowButton
      textStyle={styles.text}
      title={hostFollowed ? I18n.t('Room.unfollow') : I18n.t('Room.follow')}
      onPress={hostFollowed ? unfollow : follow}
    />}
  </MainView>
)

export default Host
