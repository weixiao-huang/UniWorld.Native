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
import I18n from 'react-native-i18n'
import infoImg from '@/img/infoImage.jpg'

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
          {userInfo.thumb_ups } {I18n.t('User.likes')}
          | {userInfo.follows.length} {I18n.t('User.follows')}
          | {userInfo.followers.length } {I18n.t('User.followers')}
        </FollowWrapText>
      </ContentView>
    </MainView>}
  </BackgroundImage>
)


export default UserCover
