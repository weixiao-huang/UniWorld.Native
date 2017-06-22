import React from 'react'
import { RefreshControl } from 'react-native'

import RoomWrap from '@/components/RoomWrap'

import {
  MainScrollView,
  ContentView,
} from './style'

const Square = ({ world }) => (
  <MainScrollView>
    <ContentView>
      {!!world && <RoomWrap
        title="world"
        titleLabel="HOT"
        roomList={world.results}
      />}
    </ContentView>
  </MainScrollView>
)

export default Square
