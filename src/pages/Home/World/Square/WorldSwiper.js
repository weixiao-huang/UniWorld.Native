/**
 * Created by huangwx on 11/04/2017.
 */
import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity  } from 'react-native'
import { connect } from 'react-redux'

import Swiper from 'react-native-swiper'
import {
  FetchRoomInfo, GoToRoomInfo
} from '../../../../store/actions'
const height = 150

@connect(dispatch => ({ dispatch }))
export default class WorldSwiper extends Component {

  onClick(){

  }

  async _goToPoster(url){
    const id = url.split('?id=')[1]
    console.log(id)
    await this.props.dispatch(FetchRoomInfo(id))
    await this.porps.dispatch(GoToRoomInfo(id))
  }
  render () {
    console.log(this.props.topPosters)
    return (
      <View>
        {
          this.props.topPosters ?
          <Swiper height={height} autoplay={true} autoplayTimeout={3} autoplayDirection={true}>
            {this.props.topPosters && this.props.topPosters.map((cover, index) => {
              if (cover.url!=null)
              return (
                <TouchableOpacity onPress={this._goToPoster(cover.url)}>
                  <Image key={index} source={{url: cover.cover}} style={{height: height, width: '100%'}}/>
                </TouchableOpacity>
              )
              else
              return(<Image key={index} source={{url: cover.cover}} style={{height: height, width: '100%'}}/>)
            })}
          </Swiper>
          :
          <Text>no</Text>
        }
      </View>
    )
  }
}
