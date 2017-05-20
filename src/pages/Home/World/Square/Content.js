/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import RoomWrap from '../../../../components/RoomWrap'
import Button from '../../../../components/StyleButton'

const mapStateToProps = state => ({
  latest: state.room.latest,
  world: state.room.world,
  top: state.room.top
})

@connect(mapStateToProps)
export default class Content extends Component {
  static propTypes = {
    newRoomList: PropTypes.array.isRequired,
    fetchNextRoomList: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
  }
  static defaultProps = {
    newRoomList: [],
    next: null
  }
  render () {
    return (
      <View>
        <View>
          <RoomWrap title={I18n.t('World.Square.top')} titleLabel="TOP" roomList={this.props.top}/>
          <RoomWrap title={I18n.t('World.Square.latest')} titleLabel="NEW" roomList={this.props.latest.results}/>
          <RoomWrap title={I18n.t('World.Square.world')} titleLabel="HOT" roomList={this.props.world.results}/>
          {this.props.newRoomList.map((item, index) =>
            <RoomWrap key={index} title={item.title} roomList={item.content}/>)
          }
        </View>
        {this.props.isFetching ?
          <ActivityIndicator
            style={{height: 40}}
            animating={this.props.isFetching}
          />
          : null
        }
        {this.props.next && !this.props.isFetching ?
          <Button
            textStyle={{color:'#bcbcbc', fontSize: 16}}
            inlineStyle={localStyles.button}
            title={I18n.t('World.Square.loadMore')}
            onPress={this.props.fetchNextRoomList}
          />
          : null
         }
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  button: {
    borderRadius: 0,
    padding: 15,
    backgroundColor: 'white'
  }
})
