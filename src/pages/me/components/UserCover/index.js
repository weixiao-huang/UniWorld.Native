import React from 'react'
import { TouchableOpacity } from 'react-native'
import BackgroundImage from '@/components/BackgroundImage'

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
        <CoverImage source={{ uri: userInfo.get('avatar_thumbnail') }} />
      </TouchableOpacity>
      <ContentView>
        <ContentLineView>
          <GenderIconImage source={userInfo.get('gender') ? maleIcon : femaleIcon} />
          <UsernameText>{userInfo.get('name')}</UsernameText>
        </ContentLineView>
        <SignatureText>{userInfo.get('signature')}</SignatureText>
        <FollowWrapText>
          {userInfo.get('followers').length + userInfo.get('follows').length} friends
          | {userInfo.get('joined_count')} joined
          | {userInfo.get('p_thumb_ups') + userInfo.get('h_thumb_ups')} thumb_ups
        </FollowWrapText>
      </ContentView>
    </MainView>}
  </BackgroundImage>
)

UserCover.uploadAvatar = function () {
}

export default UserCover
