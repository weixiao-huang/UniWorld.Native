/**
 * Created by huangwx on 11/04/2017.
 */
import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

import Swiper from 'react-native-swiper'

const height = 150


export default class WorldSwiper extends Component {

  onClick(){

  }

  render () {
    // let click = this.onClick
    console.log(this.props.topPosters)
    return (
      <View>
        {
          this.props.topPosters ?
          <Swiper height={height} autoplay={true} autoplayTimeout={3} autoplayDirection={true}>
            {this.props.topPosters && this.props.topPosters.map((cover, index) => {
              return (
                <Image key={index} source={{url: cover.cover}} style={{height: height, width: '100%'}}/>
              )
            })}
          </Swiper>
          :
          <Text>no</Text>
        }
      </View>
    )
  }
}
