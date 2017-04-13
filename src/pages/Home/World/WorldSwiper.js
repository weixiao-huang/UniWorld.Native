/**
 * Created by huangwx on 11/04/2017.
 */
import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'

import Swiper from 'react-native-swiper'

const height = 150
const covers = [
  { src: require('../../../assets/poster/la.jpg') },
  { src: require('../../../assets/poster/lb.jpg') },
  { src: require('../../../assets/poster/lc.jpg') },
  { src: require('../../../assets/poster/ld.jpg') },
  { src: require('../../../assets/poster/le.jpg') },
  { src: require('../../../assets/poster/lf.jpg') },
]

export default class WorldSwiper extends Component {
  render () {
    return (
      <Swiper height={height} autoplay={true} autoplayTimeout={3} autoplayDirection={true}>
        {covers.map((cover, index) => {
          return (
            <Image key={index} source={cover.src} style={{height: height, width: '100%'}} />
          )
        })}
      </Swiper>
    )
  }
}


