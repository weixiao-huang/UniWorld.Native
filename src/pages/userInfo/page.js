import React, { Component } from 'react'
import { StyleSheet, Alert } from 'react-native'
import I18n from 'react-native-i18n'
import AnimatedScreen from '@/components/AnimatedScreen'
import Loading from '@/components/Loading'
import api from '@/api'
import {
  MainScrollView,
  MainView,
  StyledButton,
  StyledButton2,
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

  block = () => {
    Alert.alert(
      I18n.t('User.block'),
      I18n.t('User.blockText'),
      [
        {
          text: I18n.t('Room.Footer.Leave.confirm'),
          onPress: () => this.props.blockAction(this.props.userInfo.id)
          // onPress: () => this.blockUser()
          ,
        },
        {
          text: I18n.t('Room.Footer.Leave.cancel'),
          onPress: () => { },
        },
      ],
    )
  }

  unblock = () => {
    this.props.unblockAction(this.props.userInfo.id)
  }

  // unblock = async () => {
  //   console.log(123)
  //   const res = await api.unblockUser(this.props.userInfo.id)(this.props.token)
  //   console.log(res)
  // }

  follow = () => this.props.followAction(this.props.userInfo.id)

  unfollow = () => this.props.unfollowAction(this.props.userInfo.id)

  render() {
    const { userInfo, isFollowed, requesting, myId, isBlocked } = this.props
    return (
      <MainView>
        <Loading visible={requesting} />
        {userInfo && <UserCover userInfo={userInfo} />}
        {userInfo && <MainScrollView>
          <Info user={userInfo} />
        </MainScrollView>}
        {!userInfo && <AnimatedScreen />}
        {userInfo && myId !== userInfo.id && <ButtonView>
          {!isFollowed && !isBlocked && <StyledButton2
            textStyle={styles.text}
            title={
              `- ${I18n.t('User.block')}`}
            onPress={this.block}
          />}
          {!isBlocked && <StyledButton
            textStyle={styles.text}
            title={isFollowed ?
              `= ${I18n.t('User.followed')}` :
              `+ ${I18n.t('User.follow')}`}
            onPress={isFollowed ?
              this.unfollow :
              this.follow}
          />}
          {isBlocked && <StyledButton2
            textStyle={styles.text}
            title={`= ${I18n.t('User.blocked')}`}
            onPress={this.unblock}
          />}
        </ButtonView>}
      </MainView>
    )
  }
}
