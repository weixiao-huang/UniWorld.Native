import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'
import AnimatedScreen from '@/components/AnimatedScreen'
import Loading from '@/components/Loading'

import {
  MainScrollView,
  MainView,
  StyledButton,
  ButtonView,
} from './style'

import UserCover from './components/UserCover'
import Info from './components/Info'

const styles = StyleSheet.create({
  text: {
    padding: 16,
    color: '#4d7bed',
    fontSize: 18,
  },
})

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  follow = () => this.props.followAction(this.props.userInfo.id)

  unfollow = () => this.props.unfollowAction(this.props.userInfo.id)

  render() {
    const { userInfo, isFollowed, requesting, myId } = this.props
    return (
      <MainView>
        <Loading visible={requesting} />
        {userInfo && <UserCover userInfo={userInfo} />}
        {userInfo && <MainScrollView>
          <Info user={userInfo} />
        </MainScrollView>}
        {!userInfo && <AnimatedScreen />}
        {userInfo && myId !== userInfo.id && <ButtonView>
          <StyledButton
            textStyle={styles.text}
            title={isFollowed ?
              `= ${I18n.t('User.followed')}` :
              `+ ${I18n.t('User.follow')}`}
            onPress={isFollowed ?
              this.unfollow :
              this.follow}
          />
        </ButtonView>}
      </MainView>
    )
  }
}
