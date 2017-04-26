/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import Follow from '../../StyleButton'
import Avatar from '../../Avatar'

import { FollowUser, UnfollowUser, FetchUserInfo } from '../../../store/actions'

const mapStateToProps = state => ({
  myFollows: state.user.userInfo.follows,
  myId: state.user.userInfo.id
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Host extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFollowed: this._isFollowed()
    }
  }
  static propsTypes = {
    host: PropTypes.object.isRequired
  }

  follow = async () => {
    this.setState({isFollowed: true})
    await this.props.dispatch(FollowUser(this.props.host.id))
    this.props.dispatch(FetchUserInfo)
  }

  unfollow = async () => {
    this.setState({isFollowed: false})
    await this.props.dispatch(UnfollowUser(this.props.host.id))
    this.props.dispatch(FetchUserInfo)
  }

  _isFollowed = () => {
    for (let follow of this.props.myFollows) {
      if (this.props.host.id === follow.id) return true
    }
    return false
  }

  render() {
    const { host } = this.props
    return (
      <View style={[styles.fullFlexWidth, localStyles.container]}>
        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.wrap]}>
          <Avatar id={host.id} avatar={host.avatar}/>
          <View style={[styles.flex1, localStyles.wrap__title]}>
            <Text style={[localStyles.wrap__title__name]}>{host.name}</Text>
            <Text style={[localStyles.wrap__title__signature]}>{host.signature}</Text>
          </View>
        </View>
        {host.id === this.props.myId ? null :
          <View style={[localStyles.buttonBox]}>
            <Follow
              inlineStyle={localStyles.buttonBox__button}
              title={this.state.isFollowed ? I18n.t('Room.unfollow') : I18n.t('Room.follow')}
              onPress={this.state.isFollowed ? this.unfollow : this.follow}/>
          </View>
        }
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  wrap: {
    padding: 10
  },
  wrap__title__name: {
    fontSize: 20,
    marginBottom: 14
  },
  wrap__title__signature: {
    fontSize: 14,
    color: '#808080'
  },
  wrap__title: {
    paddingLeft: 15
  },
  buttonBox: {
    marginRight: 20
  },
  buttonBox__button: {
    width: 80,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#ec5367',
    borderRadius: 5
  }
})
