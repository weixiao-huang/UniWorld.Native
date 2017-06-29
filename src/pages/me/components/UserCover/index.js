import React from 'react'
import { TouchableOpacity } from 'react-native'
import BackgroundImage from '@/components/BackgroundImage'
import I18n from '@/locales'
import maleIcon from '@/img/icon/male.png'
import femaleIcon from '@/img/icon/female.png'

import {
  MainView,
  CoverImage,
  ContentView,
  ContentLineView,
  GenderIconImage,
  UsernameText,
  SignatureText,
  FollowWrapText,
} from './style'

import infoImg from '../../img/infoImage.jpg'

const UserCover = ({ userInfo }) => (
  <BackgroundImage bgUrl={infoImg}>
    {userInfo && <MainView>
      <TouchableOpacity onPress={() => {}}>
        <CoverImage source={{ uri: userInfo.avatar_thumbnail }} />
      </TouchableOpacity>
      <ContentView>
        <ContentLineView>
          <GenderIconImage source={userInfo.gender ? maleIcon : femaleIcon} />
          <UsernameText>{userInfo.name}</UsernameText>
        </ContentLineView>
        <SignatureText>{userInfo.signature}</SignatureText>
        <FollowWrapText>
          {userInfo.followers.length + userInfo.follows.length} {I18n.t('Me.cover.friends')}
          | {userInfo.joined_count} {I18n.t('Me.cover.joined')}
          | {userInfo.p_thumb_ups + userInfo.h_thumb_ups} {I18n.t('Me.cover.thumb_ups')}
        </FollowWrapText>
      </ContentView>
    </MainView>}
  </BackgroundImage>
)

UserCover.uploadAvatar = function () {
}

export default UserCover
