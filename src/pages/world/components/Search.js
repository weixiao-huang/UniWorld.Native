import React, { Component } from 'react'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import RoomWrap from '@/components/RoomWrap'
import api, { server } from '@/api'


const MainView = styled.View`
  flex: 1;
  backgroundColor: white;
`
const SearchView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  flexDirection: row;
  height: 50px;
  borderBottomWidth: 1px;
  borderBottomColor: #eee;
`
const SearchInput = styled.TextInput`
  flex: 1;
  backgroundColor: #eee;
  paddingLeft: 10px;
`
const SearchButton = styled.TouchableOpacity`
`
const ButtonText = styled.Text`
  marginLeft: 15px;
  marginRight: 15px;
  color: #6485ed;
`
const ListScrollView = styled.ScrollView`
`
const NoneView = styled.View`
  flex: 1;
  align-items: center;
`
const NoneImage = styled.Image`
  resizeMode: contain;
  width: 70%;
`
const NextButton = styled.TouchableOpacity`
`
const NextText = styled.Text`
  textAlign: center;
  color: #aaa;
  padding: 10px;
`
const NextIndicator = styled.ActivityIndicator`
  height: 40px;
`

const ImageUrl = require('@/img/emptyList.png')

const mapStateToProps = state => ({
  token: state.auth.token,
})

@connect(mapStateToProps)
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      searchResult: [],
      next: null,
      isFetching: false,
    }
  }

  search = async () => {
    this.setState({ searchResult: [] })
    try {
      const res = await api.fetchDataFromUrl(
        `${server}/room/search/?title=${this.state.name}`,
      )(this.props.token)
      console.log(res)
      if (res.status === 200) {
        const data = await res.json()
        if (data.results && data.results.length > 0) {
          this.setState({
            searchResult: data.results,
            next: data.next,
          })
        }
        this.setState({ name: '' })
        console.log(this.state.searchResult)
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
    console.log('11111111', this.state.searchResult)
    return (
      <MainView>
        <SearchView>
          <SearchInput
            placeholder={I18n.t('World.Search.searchByName')}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
          <SearchButton onPress={this.search} >
            <ButtonText> {I18n.t('World.Search.button')}</ButtonText>
          </SearchButton>
        </SearchView>
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
      </MainView>
    )
  }
}


