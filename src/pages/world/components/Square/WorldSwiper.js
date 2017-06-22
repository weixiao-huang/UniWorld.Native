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

const WorldSwiper = ({ posters }) => (
  <MainView>
    {
      posters ?
        <Swiper height={height} autoplay autoplayTimeout={3} autoplayDirection>
          {posters && posters.map((cover) => {
            {/*if (cover.url!=null)
              return (
                <TouchableOpacity onPress={this._goToPoster(cover.url)}>
                  <Image
                    key={index}
                    source={{url: cover.cover}}
                    style={{height: height, width: '100%'}}
                  />
                </TouchableOpacity>
              )
              else*/}
            return (<PosterImage key={cover.id} source={{ url: cover.cover }} />)
          })}
        </Swiper>
        : null
    }
  </MainView>
)

export default WorldSwiper
