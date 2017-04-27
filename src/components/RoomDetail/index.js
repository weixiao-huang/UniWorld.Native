/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'
import ScrollTabView from 'react-native-scrollable-tab-view'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'
import { FetchQuestionnaires, SetLoading } from '../../store/actions'

import Notice from './Notice/index'
import Chat from './Chat/index'
import Member from './Member/index'
import Loading from "../Loading";

const mapStateToProps = state => ({
  roomInfo: state.room.roomInfo,
  userId: state.user.userInfo.id,
  loading: state.common.loading
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class RoomInfo extends Component {
  constructor(props) {
    super(props)
  }
  async componentWillMount() {
    this.props.dispatch(SetLoading(true))
    await this.props.dispatch(FetchQuestionnaires(this.props.navigation.state.params.id))
    this.props.dispatch(SetLoading(false))
  }
  render() {
    console.log('RoomDetails的props: ', this.props.navigation.state.params)
    return (
      <View style={[styles.flex1, localStyles.container]}>
        {this.props.loading ?
          <Loading visible={this.props.loading}/> :
          <ScrollTabView
            style={{flex: 2, marginTop: 20}}
            // tabBarBackgroundColor="#ec5367"
            // tabBarTextStyle={localStyles.tabBarText}
            // tabBarUnderlineStyle={localStyles.tabBarUnderline}
          >
            <Notice tabLabel={I18n.t('Room.Notice.title')}/>
            <Chat tabLabel={I18n.t('Room.Chat.title')}/>
            <Member tabLabel={I18n.t('Room.Member.title')}/>
          </ScrollTabView>
        }
      </View>
    )
  }
}


const localStyles = StyleSheet.create({

})
