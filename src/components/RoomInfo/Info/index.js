/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../../../common/styles'
import LabelBox from './LabelBox'
import Header from './Header'
import Time from './Time'
import People from './People'
import Host from './Host'

const mapStateToProps = state => ({
  roomInfo: state.room.roomInfo
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class Info extends Component {
  render() {
    const {
      cover, title, description, date_time_start, date_time_end,
      max_participants, participants, host, labels
    } = this.props.roomInfo
    return (
      <ScrollView style={[localStyles.container, styles.flex1]}>
        <Image style={[localStyles.cover]} source={{uri: cover}}/>
        <View style={[localStyles.wrap]}>
          <Header title={title} description={description}/>
          <Time start={date_time_start} end={date_time_end}/>
        </View>
        <View style={[localStyles.wrap]}>
          <People max_participants={max_participants} participants={participants}/>
        </View>
        {labels.length
          ? <LabelBox labels={labels}/>
          : null
        }
        <View style={[localStyles.wrap]}>
          <Host host={host}/>
        </View>
        <View style={[styles.flexCenter, localStyles.wrap]}>
          <TouchableOpacity>
            <Text style={[localStyles.share__text]}>
              <Icon style={[localStyles.share__text__icon]} name="thumbs-o-up" size={20}/> {I18n.t('Room.share')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  cover: {
    width: Dimensions.get('window').width,
    height: 240
  },
  container: {
    marginBottom: 50
  },
  wrap: {
    marginBottom: 10,
    paddingBottom: 20,
    backgroundColor: 'white'
  },
  share__text: {
    paddingTop: 15
  },
  share__text__icon: {
    color: '#ea5569'
  }
})
