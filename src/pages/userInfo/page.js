import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'

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
      isFollowed: false,
    }
  }

  follow = () => {}

  unfollow = () => {}

  render() {
    // const { name, signature, thumb_ups, thumb_downs, followers, follows } = this.props.user
    // const { avatar_thumbnail, gender, avatar } = this.props.user
    const { isFollowed } = this.state
    const { userInfo } = this.props
    return (
      <MainView>
        {userInfo && <UserCover userInfo={userInfo} />}
        {userInfo && <MainScrollView>
          <Info user={userInfo} />
        </MainScrollView>}
        <ButtonView>
          <StyledButton
            textStyle={styles.text}
            title={isFollowed ? `= ${I18n.t('User.followed')}` : `+ ${I18n.t('User.follow')}`}
            onPress={isFollowed ? this.unfollow : this.follow}
          />
        </ButtonView>
      </MainView>
    )
  }
}
