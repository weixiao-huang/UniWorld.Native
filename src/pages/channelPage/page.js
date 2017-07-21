import React, { Component } from 'react'
import api from '@/api'
import { server } from '@/api/constants'
import RoomWrap from '@/components/RoomWrap'
import AnimatedScreen from '@/components/AnimatedScreen'
import I18n from '@/locales'
import {
  MainView,
  MainScrollView,
  CoverImage,
  ListScrollView,
  NextButton,
  NextText,
  NextIndicator,
} from './style'

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
    const {
      searchResult, cover, isFetching, next, showNext,
    } = this.state
    return (
      <MainView>
        {searchResult.length > 0 ? <MainScrollView>
          <CoverImage source={{ uri: cover }} />
          <ListScrollView>
            <RoomWrap roomList={searchResult} />
            {isFetching ?
              <NextIndicator
                animating={isFetching}
              />
              :
              next && <NextButton onPress={showNext}>
                <NextText>
                  {I18n.t('RoomList.searchNext')}
                </NextText>
              </NextButton>
            }
          </ListScrollView>
        </MainScrollView> :
        <AnimatedScreen />}
      </MainView>
    )
  }
}
