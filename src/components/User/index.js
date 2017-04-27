/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import Button from '../StyleButton'

import styles from '../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'
import Loading from '../../components/Loading'

import UserCover from './UserCover'
import Info from './Info'
import Interests from './Interests'
import Rooms from './Rooms'

import {
  FollowUser, UnfollowUser, FetchUserInfo, FetchDislikes, FetchUser, SetLoading
} from '../../store/actions'

const mapStateToProps = state => ({
  myFollows: state.user.userInfo.follows,
  user: state.user.user,
  dislikes: state.user.dislikes,
  loading: state.common.loading
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class NewRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFollowed: this._isFollowed()
    }
  }

  async componentWillMount() {
    const { params: { id } } = this.props.navigation.state
    console.log('用户Id: ', id)
    this.props.dispatch(SetLoading(true))
    await this.props.dispatch(FetchUser(id))
    await this.props.dispatch(FetchDislikes(id))
    this.props.dispatch(SetLoading(false))
  }

  follow = async () => {
    this.setState({isFollowed: true})
    await this.props.dispatch(FollowUser(this.props.user.id))
    this.props.dispatch(FetchUserInfo)
  }

  unfollow = async () => {
    this.setState({isFollowed: false})
    await this.props.dispatch(UnfollowUser(this.props.user.id))
    this.props.dispatch(FetchUserInfo)
  }

  _isFollowed = () => {
    const { params: { id } } = this.props.navigation.state
    for (let follow of this.props.myFollows) {
      if (id === follow.id) return true
    }
    return false
  }
  render() {
    const isEmpty = Object.keys(this.props.user).length <= 0
    return (
      <View style={[styles.flex1]}>
        {this.props.loading ?
          <Loading visible={this.props.loading}/>
          : isEmpty ? null :
          <View style={styles.flex1}>
            <UserCover user={this.props.user}/>
            <ScrollTabView
              style={{flex: 2}}
              tabBarUnderlineStyle={[localStyles.tabBarUnderline]}
              tabBarBackgroundColor="white"
              tabBarTextStyle={[localStyles.tabBarText]}
            >
              <Info dislikes={this.props.dislikes} user={this.props.user} tabLabel={I18n.t('User.info')}/>
              <Rooms isFollowed={this.state.isFollowed} tabLabel={I18n.t('User.rooms')}/>
              <Interests isFollowed={this.state.isFollowed} tabLabel={I18n.t('User.interests')}/>
            </ScrollTabView>
            <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
              <Button
                inlineStyle={[localStyles.footer__follow, this.state.isFollowed ? {backgroundColor: '#c4caf2'} : null]}
                textStyle={[localStyles.footer__text]}
                title={this.state.isFollowed ? `= ${I18n.t('User.followed')}` : `+ ${I18n.t('User.follow')}`}
                onPress={this.state.isFollowed ? this.unfollow : this.follow}
              />
            </View>
          </View>
        }
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  footer__follow: {
    backgroundColor: 'white',
    borderRadius: 0
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footer__text: {
    padding: 16,
    color: '#4d7bed',
    fontSize: 18
  },
  tabBarUnderline: {
    backgroundColor: 'black',
    // backgroundColor: 'white',
    // height: 2,
    // borderTopColor: 'black',
    // borderTopWidth: 2
  },
  tabBarText: {
  }
})
