/**
 * Created by huangwx on 17/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image, Dimensions } from 'react-native'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../../../components/StyleButton'

import styles from '../../../common/styles'
import LabelBox from './LabelBox'
import Header from './Header'
import Time from './Time'
import People from './People'
import Host from './Host'

export default class Info extends Component {
  static propTypes = {
    roomInfo: PropTypes.object.isRequired
  }
  share = () => {

  }
  render() {
    const {
      cover, title, description, date_time_start, date_time_end,
      max_participants, participants, host, labels, location_string
    } = this.props.roomInfo
    let options = {
      location_string: {
        iconName: 'location-on',
        content: location_string
      },
      welcome: {
        iconName: 'thumb-up'
      },
      rewards: {
        iconName: 'card-giftcard'
      },
      expense: {
        iconName: 'attach-money'
      }
    }
    const opt = JSON.parse(this.props.roomInfo.options)
    for (let option in opt) {
      if (opt.hasOwnProperty(option))
        options[option].content = opt[option]
    }
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
        {Object.keys(opt).length > 0 ?
          <View style={[localStyles.wrap]}>
            {Object.values(options).map((item, index) => (
              item.content ?
                <View style={[styles.rowFlex, localStyles.infoItem]} key={index}>
                  <Icon style={[localStyles.share__text__icon]} name={item.iconName} size={20}/>
                  <Text> {item.content}</Text>
                </View> : null
            ))}
          </View> : null
        }
        <View style={[localStyles.wrap]}>
          <Host host={host}/>
        </View>
        <View style={[styles.flexCenter, localStyles.wrap]}>
          <TouchableOpacity style={[styles.flex1]}>
            <View style={[styles.rowFlex, styles.flexCenter, localStyles.share__text]}>
              <Icon style={[localStyles.share__text__icon]} name="thumb-up" size={20}/>
              <Text> {I18n.t('Room.share')}</Text>
            </View>
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
    backgroundColor: 'white'
  },
  infoItem: {
    borderBottomWidth: 1,
    padding: 15,
    paddingLeft: 20,
    alignItems: 'center',
    borderBottomColor: '#e9e9ef',

  },
  share__text: {
    padding: 15,
  },
  share__text__icon: {
    color: '#ea5569',
    paddingRight: 10
  }
})
