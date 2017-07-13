import React, { Component } from 'react'
import { RefreshControl } from 'react-native'
import styled from 'styled-components/native'
import I18n from '@/locales'
import RoomWrap from '@/components/RoomWrap'
import WorldSwiper from './components/WorldSwiper'
import Channels from './components/Channels'

import {
  MainScrollView,
  ContentView,
} from './style'

const posterUrl0 = require('@/img/poster/la.jpg')
const posterUrl1 = require('@/img/poster/lb.jpg')

const MiddlePosterImage = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
  height: 112.5px;
  width: 90%;
  border-radius: 16px;
`

export default class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
    }
  }

  render() {
    const {
      world, latest, recommend, posters, refreshing,
      fetchWorldAction, channels, navigateToChannelPageAction,
    } = this.props
    return (
      <MainScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchWorldAction()}
          />
        }
      >
        {posters && <WorldSwiper posters={posters.tops} />}
        <Channels
          channels={channels}
          navigate={navigateToChannelPageAction}
        />
        <ContentView>
          {recommend && recommend.length > 0 && <RoomWrap
            title={I18n.t('World.Square.top')}
            titleLabel="TOP"
            roomList={recommend}
          />}
          {recommend && recommend.length > 0 && <MiddlePosterImage
            source={!!posters && posters.centers[0] ?
              { uri: posters.centers[0].cover } :
              posterUrl0
            }
          />}
          {latest && <RoomWrap
            title={I18n.t('World.Square.latest')}
            titleLabel="Now"
            roomList={latest.results}
          />}
          {latest && <MiddlePosterImage
            source={!!posters && posters.centers[1] ?
              { uri: posters.centers[1].cover } :
              posterUrl1
            }
          />}
          {world && <RoomWrap
            title={I18n.t('World.Square.world')}
            titleLabel="HOT"
            roomList={world.results}
          />}
        </ContentView>
      </MainScrollView>
    )
  }
}
