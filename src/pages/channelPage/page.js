import React, { Component } from 'react'
import api from '@/api'
import { server } from '@/api/constants'
import RoomWrap from '@/components/RoomWrap'
import I18n from '@/locales'
import {
  MainView,
  MainScrollView,
  CoverImage,
  ListScrollView,
  NoneView,
  NoneImage,
  NextButton,
  NextText,
  NextIndicator,
} from './style'

const ImageUrl = require('@/img/emptyList.png')

export default class ChannelPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      searchResult: [],
      next: null,
      isFetching: false,
      id: this.props.navigation.state.params.id,
    }
  }

  componentWillMount = async () => {
    this.setState({ searchResult: [] })
    try {
      const res = await api.fetchDataFromUrl(`${server}/channel/${this.state.id}/`)(this.props.token)
      console.log(res)
      if (res.status === 200) {
        const data = await res.json()
        console.log(data)
        if (data.rooms && data.rooms.length > 0) {
          this.setState({
            searchResult: data.rooms,
            next: data.next,
            cover: data.cover,
          })
        }
        this.setState({ name: '' })
      }
    } catch (e) {
      console.log(e)
    }
  }

  showNext = async () => {
    this.setState({ isFetching: true })
    try {
      const res = await api.fetchDataFromUrl(this.state.next)(this.props.token)
      console.log(res)
      if (res.status === 200) {
        const data = await res.json()
        this.setState({
          searchResult: this.state.searchResult.concat(data.results),
          next: data.next,
        })
      }
    } catch (e) {
      console.log(e)
    }
    this.setState({ isFetching: false })
  }

  render() {
    return (
      <MainView>
        <MainScrollView>
          <CoverImage source={{ uri: this.state.cover }} />
          <ListScrollView>
            {this.state.searchResult.length > 0 ?
              <RoomWrap
                roomList={this.state.searchResult}
              />
              :
              <NoneView>
                <NoneImage source={ImageUrl} />
              </NoneView>
            }
            {this.state.isFetching ?
              <NextIndicator
                animating={this.state.isFetching}
              /> :
              this.state.next && <NextButton onPress={this.showNext}>
                <NextText>{I18n.t('RoomList.searchNext')}</NextText>
              </NextButton>
            }
          </ListScrollView>
        </MainScrollView>
      </MainView>
    )
  }
}
