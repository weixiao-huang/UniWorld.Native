/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'
import Info from './Info/index'
import Detail from './Detail/index'

import styles from '../../common/styles'

import { GoToRoomDetail, FetchQuestionnaires } from '../../store/actions'

const mapStateToProps = state => ({
  roomInfo: state.room.roomInfo,
  userId: state.user.userInfo.id
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class RoomInfo extends Component {
  @autobind
  _joined() {
    for (let participant of this.props.roomInfo.participants) {
      if (this.props.userId === participant.id) return true
    }
    return false
  }


  _leave() {

  }
  @autobind
  _room(id) {
    return async () => {
      await this.props.dispatch(FetchQuestionnaires(id))
      this.props.dispatch(GoToRoomDetail(id))
    }
  }

  _joinin() {

  }
  _mark() {

  }
  render() {
    const { params: { id } } = this.props.navigation.state
    return (
      <View style={[styles.flex1, localStyles.container]}>
        {this._joined()
          ? <Info roomInfo={this.props.roomInfo} tabLabel={I18n.t('Room.Info.title')}/>
          : <ScrollTabView
              style={{flex: 2, marginTop: 20}}
              // tabBarBackgroundColor="#ec5367"
              // tabBarTextStyle={localStyles.tabBarText}
              // tabBarUnderlineStyle={localStyles.tabBarUnderline}
            >
              <Info roomInfo={this.props.roomInfo} tabLabel={I18n.t('Room.Info.title')}/>
              <Detail tabLabel={I18n.t('Room.Detail.title')}/>
            </ScrollTabView>
        }

        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
          <TouchableOpacity
            style={[styles.flexCenter, localStyles.star]}
            onPress={this._joined() ? this._leave: this._mark}
          >
            <Text style={[localStyles.footer__text]}>
              {this._joined() ? I18n.t('Room.Footer.leave') : I18n.t('Room.Footer.star')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexCenter, localStyles.join]}
            onPress={this._joined() ? this._room(id): this._joinin}
          >
            <Text style={[localStyles.footer__text]}>
              {this._joined() ? I18n.t('Room.Footer.room') : I18n.t('Room.Footer.join')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  star: {
    flex: 1,
    backgroundColor: '#3555b6'
  },
  join: {
    flex: 2,
    backgroundColor: '#ec5367'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footer__text: {
    padding: 16,
    color: 'white',
    fontSize: 17
  }
})
