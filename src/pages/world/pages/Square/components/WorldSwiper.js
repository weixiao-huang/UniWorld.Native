/*
  Component: WorldSwiper
*/

import React from 'react'
import Swiper from 'react-native-swiper'
import styled from 'styled-components/native'

const height = 150

const MainView = styled.View`
`

const PosterImage = styled.Image`
  height: ${height}px;
  width: 100%;
`

export default ({ posters }) => (
  <MainView>
    {!!posters && <Swiper
      height={height}
      autoplay
      autoplayTimeout={3}
      autoplayDirection
    >
      {!!posters && posters.map(cover => (
        <PosterImage
          key={cover.cover}
          source={{ uri: cover.cover }}
        />
      ))}
    </Swiper>}
  </MainView>
)
