/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native'
import styles from '../../../../common/styles'

import RoomItem from '../../../../components/RoomItem'

const roomList = [
  {
    title: '斯卡迪开发垃圾开了房',
    place: '刷卡机代理费卡水立方',
    timeRange: ['4月10日', '5月6日'],
    src: 'https://api.univord.com/media/uploads/AdvancedRoom/71/avatars/1.png.200x200_q85_crop.jpg'
  },
  {
    title: '斯卡迪开发垃圾开了房',
    place: '刷卡机代理费卡水立方',
    timeRange: ['4月10日', '5月6日'],
    src: 'https://api.univord.com/media/uploads/AdvancedRoom/71/avatars/1.png.200x200_q85_crop.jpg'
  },
  {
    title: '斯卡迪开发垃圾开了房',
    place: '刷卡机代理费卡水立方',
    timeRange: ['4月10日', '5月6日'],
    src: 'https://api.univord.com/media/uploads/AdvancedRoom/71/avatars/1.png.200x200_q85_crop.jpg'
  },
  {
    title: '斯卡迪开发垃圾开了房',
    place: '刷卡机代理费卡水立方',
    timeRange: ['4月10日', '5月6日'],
    src: 'https://api.univord.com/media/uploads/AdvancedRoom/71/avatars/1.png.200x200_q85_crop.jpg'
  },
  {
    title: '斯卡迪开发垃圾开了房',
    place: '刷卡机代理费卡水立方',
    timeRange: ['4月10日', '5月6日'],
    src: 'https://api.univord.com/media/uploads/AdvancedRoom/71/avatars/1.png.200x200_q85_crop.jpg'
  },
  {
    title: '斯卡迪开发垃圾开了房',
    place: '刷卡机代理费卡水立方',
    timeRange: ['4月10日', '5月6日'],
    src: 'https://api.univord.com/media/uploads/AdvancedRoom/71/avatars/1.png.200x200_q85_crop.jpg'
  },
  {
    title: '斯卡迪开发垃圾开了房',
    place: '刷卡机代理费卡水立方',
    timeRange: ['4月10日', '5月6日'],
    src: 'https://api.univord.com/media/uploads/AdvancedRoom/71/avatars/1.png.200x200_q85_crop.jpg'
  },
  {
    title: '斯卡迪开发垃圾开了房',
    place: '刷卡机代理费卡水立方',
    timeRange: ['4月10日', '5月6日'],
    src: 'https://api.univord.com/media/uploads/AdvancedRoom/71/avatars/1.png.200x200_q85_crop.jpg'
  },
]

export default class Content extends Component {
  render () {
    return (
      <View style={[styles.flex1]}>
        {roomList.map((item, index) => {
          return (
            <View key={index} style={[styles.flex1]}>
              <RoomItem
                src={item.src}
                title={item.title}
                place={item.place}
                timeRange={item.timeRange}
              />
            </View>
          )
        })}
      </View>
    )
  }
}
