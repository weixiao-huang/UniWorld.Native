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

const PlaceHolder = ({id}) => <Text>{id}</Text>

@connect(...[, dispatch => ({dispatch})])
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
          <PlaceHolder id={id} tabLabel={I18n.t('Me.info.label')}/>
          <PlaceHolder id={id} tabLabel={I18n.t('Me.follow.label')}/>
          <PlaceHolder id={id} tabLabel={I18n.t('Me.credit.label')}/>
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
