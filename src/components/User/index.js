/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import styles from '../../common/styles'
import ScrollTabView from 'react-native-scrollable-tab-view'

import UserCover from '../UserCover'
import Info from './Info'
import Interests from './Interests'
import Rooms from './Rooms'

const mapStateToProps = state => ({
  user: state.user.user
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class NewRoom extends Component {
  render() {
    const { params: { id } } = this.props.navigation.state
    return (
      <View style={styles.flex1}>
        <UserCover/>
        <ScrollTabView
          style={{flex: 2}}
          tabBarUnderlineStyle={[meStyles.tabBarUnderline]}
          tabBarBackgroundColor="white"
          tabBarTextStyle={[meStyles.tabBarText]}
        >
          <Info user={this.props.user} tabLabel={I18n.t('User.info')}/>
          <Rooms tabLabel={I18n.t('User.rooms')}/>
          <Interests tabLabel={I18n.t('User.interests')}/>
        </ScrollTabView>
      </View>
    );
  }
}

const meStyles = StyleSheet.create({
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
