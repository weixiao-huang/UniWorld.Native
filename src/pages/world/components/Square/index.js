import React from 'react'
import { RefreshControl } from 'react-native'

import RoomWrap from '@/components/RoomWrap'

import {
  MainScrollView,
  ContentView,
} from './style'

const Square = ({ world, latest, recommend }) => (
  <MainScrollView>
    <ContentView>
      {!!recommend && recommend.length > 0 && <RoomWrap
        title="TOP"
        titleLabel="TOP"
        roomList={recommend}
      />}
      {!!latest && <RoomWrap
        title="Latest"
        titleLabel="Now"
        roomList={latest.results}
      />}
      {!!world && <RoomWrap
        title="world"
        titleLabel="HOT"
        roomList={world.results}
      />}
    </ContentView>
  </MainScrollView>
)

export default Square
