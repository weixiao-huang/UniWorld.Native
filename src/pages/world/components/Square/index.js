import React from 'react'
import { RefreshControl } from 'react-native'
import RoomWrap from '@/components/RoomWrap'
import styled from 'styled-components/native'
import WorldSwiper from './WorldSwiper'
import {
  MainScrollView,
  ContentView,
} from './style'

const posterUrl0 = require('@/img/poster/la.jpg')
const posterUrl1 = require('@/img/poster/lb.jpg')

const MiddlePosterImage = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  height: 112.5px;
  width: 345px;
  border-radius: 16px;
`

const Square = ({ world, latest, recommend, posters }) => (
  <MainScrollView>
    {!!posters && <WorldSwiper posters={posters.tops} />}
    <ContentView>
      {!!recommend && recommend.length > 0 && <RoomWrap
        title="TOP"
        titleLabel="TOP"
        roomList={recommend}
      />}
      {!!recommend && recommend.length > 0 && <MiddlePosterImage
        source={!!posters && posters.centers[0] ?
          { uri: posters.centers[0].cover } :
          posterUrl0
        }
      />}
      {!!latest && <RoomWrap
        title="Latest"
        titleLabel="Now"
        roomList={latest.results}
      />}
      {!!latest && <MiddlePosterImage
        source={!!posters && posters.centers[1] ?
          { uri: posters.centers[1].cover } :
          posterUrl1
        }
      />}
      {!!world && <RoomWrap
        title="World"
        titleLabel="HOT"
        roomList={world.results}
      />}
    </ContentView>
  </MainScrollView>
)

export default Square
